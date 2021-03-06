<?php

/**
 * Initialize Gutenberg Compatibility for Event Tickets metabox
 *
 * @since 0.2.4-alpha
 */
class Tribe__Gutenberg__Tickets__Compatibility__Tickets {

	/**
	 * Hook into the Events Template single page to allow Blocks to be properly reordered
	 *
	 * @since 0.2.4-alpha
	 *
	 * @return void
	 */
	public function hook() {
		add_filter( 'the_content', array( $this, 'include_frontend_form' ), 50 );
	}

	/**
	 * Intercept content and add the Front-end form where it is required
	 *
	 * @since 0.2.4-alpha
	 *
	 * @param string $content Previous content
	 *
	 * @return string
	 */
	public function include_frontend_form( $content = '' ) {
		if ( is_admin() ) {
			return $content;
		}

		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return $content;
		}

		// Fetch the post
		$post = get_post( get_the_ID() );

		// We don't care about anything other than event for now
		if ( Tribe__Events__Main::POSTTYPE !== $post->post_type ) {
			return $content;
		}

		// Bail on non gutenberg
		if ( ! has_blocks( $post->ID ) ) {
			return $content;
		}

		$hook = tribe( 'tickets.rsvp' )->get_ticket_form_hook();
		remove_filter( 'the_content', array( $this, 'include_frontend_form' ), 50 );

		// Remove iCal to prevent infinite loops
		remove_all_filters( $hook );

		ob_start();
		do_action( $hook );
		$form = ob_get_clean();

		if ( false === strpos( $hook, 'before' ) ) {
			return $content . $form;
		} else {
			return $form . $content;
		}
	}
}
