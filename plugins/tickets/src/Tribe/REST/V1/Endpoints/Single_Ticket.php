<?php

class Tribe__Gutenberg__Tickets__REST__V1__Endpoints__Single_ticket
	extends Tribe__Tickets__REST__V1__Endpoints__Base
	implements Tribe__REST__Endpoints__DELETE_Endpoint_Interface,
	Tribe__REST__Endpoints__UPDATE_Endpoint_Interface,
	Tribe__REST__Endpoints__CREATE_Endpoint_Interface {

	/**
	 * {@inheritdoc}
	 */
	public function DELETE_args() {
		return array(
			'id' => array(
				'type' => 'integer',
				'in' => 'path',
				'description' => __( 'The ticket post ID', 'event-tickets' ),
				'required' => true,
				'validate_callback' => array( $this->validator, 'is_positive_int' ),
			),
			'post_id' => array(
				'type' => 'integer',
				'in' => 'body',
				'required' => true,
				'validate_callback' => array( $this->validator, 'is_positive_int' ),
			),
			'remove_ticket_nonce' => array(
				'type' => 'string',
				'in' => 'body',
				'required' => true,
				'validate_callback' => array( $this->validator, 'is_string' ),
				'sanitize_callback' => 'sanitize_text_field',
			),
		);
	}

	/**
	 * {@inheritdoc}
	 */
	public function delete( WP_REST_Request $request ) {
		$ticket_id = $request['id'];
		$ticket_data = $this->get_readable_ticket_data( $ticket_id );

		if ( $ticket_data instanceof WP_Error ) {
			return $ticket_data;
		}

		$body = $request->get_body_params();
		$post_id = $body['post_id'];
		$nonce_action = 'remove_ticket_nonce';
		$nonce = $body[ $nonce_action ];

		if ( ! $this->has_permission( $post_id, $nonce, $nonce_action ) ) {
			return new WP_Error(
				'forbidden',
				__( 'Invalid nonce', 'events-gutenberg' ),
				array( 'status' => 403 )
			);
		}

		$provider = tribe_tickets_get_ticket_provider( $ticket_id );

		if ( ! $provider ) {
			return new WP_Error(
				'bad_request',
				__( 'Commerce Module invalid', 'events-gutenberg' ),
				array( 'status' => 400 )
			);
		}

		// Pass the control to the child object
		$return = $provider->delete_ticket( $post_id, $ticket_id );

		// Successfully deleted?
		if ( $return ) {
			/**
			 * Fire action when a ticket has been deleted
			 *
			 * @param int $post_id ID of parent "event" post
			 */
			do_action( 'tribe_tickets_ticket_deleted', $post_id );
		}

		$response = new WP_REST_Response( $return );
		$response->set_status( 202 );

		return $response;
	}

	/**
	 * Validate if request has a valid nonce and user has valid permission
	 *
	 * @todo Validate permissions independent from this one in order to provide a more meaningful
	 * message
	 *
	 * @param $post_id
	 * @param $nonce
	 * @param $nonce_action
	 * @return bool
	 */
	private function has_permission( $post_id, $nonce, $nonce_action ) {
		$post = get_post( $post_id );

		if ( ! $post instanceof WP_Post ) {
			return false;
		}

		return wp_verify_nonce( $nonce, $nonce_action )
			&& current_user_can( get_post_type_object( $post->post_type )->cap->edit_posts );
	}

	/**
	 * {@inheritdoc}
	 */
	public function can_delete() {
		return true;
	}

	/**
	 * {@inheritdoc}
	 */
	public function update( WP_REST_Request $request ) {
		return $this->add_ticket( $request, 'edit_ticket_nonce' );
	}

	/**
	 * {@inheritdoc}
	 */
	public function EDIT_args() {
		return array_merge(
			array(
				'id' => array(
					'type' => 'integer',
					'in' => 'path',
					'description' => __( 'The ticket post ID', 'event-tickets' ),
					'required' => true,
					'validate_callback' => array( $this->validator, 'is_positive_int' ),
				),
				'post_id' => array(
					'type' => 'integer',
					'in' => 'body',
					'required' => true,
					'validate_callback' => array( $this->validator, 'is_positive_int' ),
				),
				'edit_ticket_nonce' => array(
					'type' => 'string',
					'in' => 'body',
					'required' => true,
					'validate_callback' => array( $this->validator, 'is_string' ),
					'sanitize_callback' => 'sanitize_text_field',
				),
			),
			$this->ticket_args()
		);
	}

	/**
	 * {@inheritdoc}
	 */
	public function can_edit() {
		return true;
	}

	/**
	 * {@inheritdoc}
	 */
	public function create( WP_REST_Request $request, $return_id = false ) {
		return $this->add_ticket( $request, 'add_ticket_nonce' );
	}

	/**
	 * {@inheritdoc}
	 */
	public function CREATE_args() {
		return array(
			array(
				'add_ticket_nonce' => array(
					'type' => 'string',
					'in' => 'body',
					'required' => true,
					'validate_callback' => array( $this->validator, 'is_string' ),
					'sanitize_callback' => 'sanitize_text_field',
				),
				'provider' => array(
					'type' => 'string',
					'in' => 'body',
					'required' => true,
					'validate_callback' => array( $this->validator, 'is_string' ),
					'sanitize_callback' => 'sanitize_text_field',
				),
			),
			$this->ticket_args(),
		);
	}

	/**
	 * Add ticket callback executed to update / add a new ticket.
	 *
	 * @since TBD
	 *
	 * @param WP_REST_Request $request
	 * @param $nonce_action
	 * @return WP_Error|WP_REST_Response
	 */
	public function add_ticket( WP_REST_Request $request, $nonce_action ) {
		$ticket_id = empty( $request['id'] ) ? null : $request['id'];
		$provider_name = empty( $request['provider'] ) ? null : $request['provider'];

		// Merge the defaults to avoid usage of `empty` values
		$body = array_merge(
			array( 'tribe-ticket' => [] ),
			$request->get_default_params(),
			$request->get_body_params()
		);

		$nonce = $body[ $nonce_action ];
		$post_id = $body['post_id'];

		if ( ! $this->has_permission( $post_id, $nonce, $nonce_action ) ) {
			return new WP_Error(
				'forbidden',
				__( 'Invalid nonce', 'events-gutenberg' ),
				array( 'status' => 403 )
			);
		}

		if ( $ticket_id === null && $provider_name !== null ) {
			$provider = call_user_func( array( $provider_name, 'get_instance' ) );
		}  else {
			$provider = tribe_tickets_get_ticket_provider( $ticket_id );
		}

		if ( ! $provider ) {
			return new WP_Error(
				'bad_request',
				__( 'Commerce Module invalid', 'events-gutenberg' ),
				array( 'status' => 400 )
			);
		}

		$ticket_data = array(
			'ticket_name' => $body['name'],
			'ticket_description' => $body['description'],
			'ticket_price' => $body['price'],
			'ticket_show_description' => $body['show_description'],
			'ticket_start_date' => $body['start_date'],
			'ticket_start_time' => $body['start_time'],
			'ticket_end_date' => $body['end_date'],
			'ticket_end_time' => $body['end_time'],
			'tribe-ticket' => $body['tribe-ticket'],
		);

		if ( $ticket_id !== null ) {
			$ticket_data['ticket_id'] = $ticket_id;
		}

		// Get the Ticket Object
		$ticket = $provider->ticket_add( $post_id, $ticket_data );

		if ( ! $ticket ) {
			return new WP_Error(
				'not_acceptable',
				__( 'Ticket was not able to be updated', 'events-gutenberg' ),
				array( 'status' => 406 )
			);
		}

		do_action( 'tribe_tickets_ticket_added', $post_id );

		$response = new WP_REST_Response( $provider->get_ticket( $post_id, $ticket ) );
		$response->set_status( 202 );

		return $response;
	}

	public function can_create() {
		return true;
	}

	public function ticket_args() {
		return array(
			'name' => array(
				'type' => 'string',
				'in' => 'body',
				'validate_callback' => array( $this->validator, 'is_string_or_empty' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default' => '',
			),
			'description' => array(
				'type' => 'string',
				'in' => 'body',
				'validate_callback' => array( $this->validator, 'is_string_or_empty' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default' => '',
			),
			'price' => array(
				'type' => 'string',
				'in' => 'body',
				'validate_callback' => array( $this->validator, 'is_string_or_empty' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default' => '',
			),
			'show_description' => array(
				'type' => 'string',
				'in' => 'body',
				'validate_callback' => array( $this->validator, 'is_string_or_empty' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default' => 'yes',
			),
			'start_date' => array(
				'type' => 'string',
				'in' => 'body',
				'validate_callback' => array( $this->validator, 'is_string_or_empty' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default' => '',
			),
			'start_time' => array(
				'type' => 'string',
				'in' => 'body',
				'validate_callback' => array( $this->validator, 'is_string_or_empty' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default' => '',
			),
			'end_date' => array(
				'type' => 'string',
				'in' => 'body',
				'validate_callback' => array( $this->validator, 'is_string_or_empty' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default' => '',
			),
			'end_time' => array(
				'type' => 'string',
				'in' => 'body',
				'validate_callback' => array( $this->validator, 'is_string_or_empty' ),
				'sanitize_callback' => 'sanitize_text_field',
				'default' => '',
			),
			'ticket' => array(
				'in' => 'body',
				'type' => 'array',
				'defaults' => [],
			),
		);
	}
}