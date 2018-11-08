<?php

/**
 * Initialize Gutenberg Events Pro Meta fields
 *
 * @since TBD
 */
class Tribe__Gutenberg__Events_Pro__Meta {
	/**
	 * Register the required Meta fields for Blocks Editor API saving
	 *
	 * @since  TBD
	 *
	 * @return void
	 */
	public function register() {
		register_meta( 'post', '_tribe_blocks_recurrence_rules', tribe( 'gutenberg.events.meta' )->text() );
		register_meta( 'post', '_tribe_blocks_recurrence_exclusions', tribe( 'gutenberg.events.meta' )->text() );
		
		add_filter( 'get_post_metadata', array( $this, 'filter_going_fields' ), 15, 4 );
		add_action( 'deleted_post_meta', array( $this, 'remove_recurrence_meta' ), 10, 3  );
		add_filter( 'tribe_pro_show_recurrence_meta_box', array( $this, 'remove_recurrence_classic_meta' ) );
	}
	
	/**
	 * @since 0.3.0-alpha
	 *
	 * @param null|array|string $value The value get_metadata() should return a single metadata value, or an
	 *                                    array of values.
	 * @param int               $post_id Post ID.
	 * @param string            $meta_key Meta key.
	 * @param string|array      $single Meta value, or an array of values.
	 *
	 * @return array|null|string The attachment metadata value, array of values, or null.
	 */
	public function filter_going_fields( $value, $post_id, $meta_key, $single ) {
		$valid_keys = array(
			'_tribe_blocks_recurrence_rules',
			'_tribe_blocks_recurrence_exclusions',
		);
		
		if ( ! in_array( $meta_key, $valid_keys ) ) {
			return $value;
		}
		
		$recurrence = get_post_meta( $post_id, '_EventRecurrence', true );
		$result = $this->get_value( $post_id, $meta_key );
		if ( empty( $recurrence ) || ! empty( $result ) ) {
			return $value;
		}
		
		$keys = array(
			'_tribe_blocks_recurrence_rules'      => 'rules',
			'_tribe_blocks_recurrence_exclusions' => 'exclusions',
		);
		$key  = $keys[ $meta_key ];
		if ( empty( $recurrence[ $key ] ) ) {
			return $value;
		}
		
		$types = $recurrence[ $key ];
		$data  = array();
		foreach ( $types as $type ) {
			$blocks = new Tribe__Gutenberg__Events_Pro__Recurrence__Blocks( $type );
			$blocks->parse();
			$data[] = $blocks->get_parsed();
		}
		$encoded = json_encode( $data );
		return $single ? $encoded : array( $encoded );
	}
	
	/**
	 * Return the meta value of a post ID directly from the DB
	 *
	 * @since TBD
	 *
	 * @param int    $post_id
	 * @param string $meta_key
	 *
	 * @return mixed
	 */
	public function get_value( $post_id = 0, $meta_key = '' ) {
		global $wpdb;
		$query = "SELECT meta_value FROM $wpdb->postmeta WHERE post_id = %d AND meta_key = %s";
		
		return $wpdb->get_var( $wpdb->prepare( $query, $post_id, $meta_key ) );
	}
	
	/**
	 * Removes the meta keys that maps into the classic editor when the `_EventRecurrence` is
	 * removed.
	 *
	 * @since TBD
	 *
	 * @param $meta_id
	 * @param $object_id
	 * @param $meta_key
	 */
	public function remove_recurrence_meta( $meta_id, $object_id, $meta_key ) {
		if ( '_EventRecurrence' !== $meta_key ) {
			return;
		}
		delete_post_meta( $object_id, '_tribe_blocks_recurrence_rules' );
		delete_post_meta( $object_id, '_tribe_blocks_recurrence_exclusions' );
	}
	
	/**
	 * Remove the recurrence meta box if classic-editor is set
	 *
	 * @since TBD
	 *
	 * @param $show_meta
	 *
	 * @return bool
	 */
	public function remove_recurrence_classic_meta( $show_meta ) {
		$is_classic_editor = tribe_get_request_var('classic-editor', null );
		if ( $is_classic_editor === null ) {
			return false;
		}
		return $show_meta;
	}
}
