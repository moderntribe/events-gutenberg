<?php
class Tribe__Gutenberg__Events__Blocks__Event_Price
extends Tribe__Gutenberg__Common__Blocks__Abstract {

	/**
	 * Which is the name/slug of this block
	 *
	 * @since  0.1.1-alpha
	 *
	 * @return string
	 */
	public function slug() {
		return 'event-price';
	}

	/**
	 * Set the default attributes of this block
	 *
	 * @since  0.2.4-alpha
	 *
	 * @return string
	 */
	public function default_attributes() {

		$defaults = array(
			'cost' => tribe_get_formatted_cost(),
		);

		return $defaults;
	}

	/**
	 * Since we are dealing with a Dynamic type of Block we need a PHP method to render it
	 *
	 * @since  0.1.0-alpha
	 *
	 * @param  array $attributes
	 *
	 * @return string
	 */
	public function render( $attributes = array() ) {
		$args['attributes'] = $this->attributes( $attributes );

		// Add the rendering attributes into global context
		tribe( 'gutenberg.events.template' )->add_template_globals( $args );

		return tribe( 'gutenberg.events.template' )->template( array( 'blocks', $this->slug() ), $args, false );
	}

	/**
	 * Register the Assets for when this block is active
	 *
	 * @since  0.2.8-alpha
	 *
	 * @return void
	 */
	public function assets() {
		tribe_asset(
			tribe( 'gutenberg.events.plugin' ),
			'tribe-events-block-' . $this->slug(),
			'app/' . $this->slug() . '/frontend.css',
			array(),
			'wp_enqueue_scripts',
			array(
				'conditionals' => array( $this, 'has_block' ),
			)
		);
	}
}