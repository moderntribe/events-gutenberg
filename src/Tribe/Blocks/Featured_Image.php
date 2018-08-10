<?php
class Tribe__Events_Gutenberg__Blocks__Featured_Image
extends Tribe__Events_Gutenberg__Blocks__Abstract {

	/**
	 * Which is the name/slug of this block
	 *
	 * @since  0.2.2-alpha
	 *
	 * @return string
	 */
	public function slug() {
		return 'featured-image';
	}

	/**
	 * Since we are dealing with a Dynamic type of Block we need a PHP method to render it
	 *
	 * @since  0.2.2-alpha
	 *
	 * @param  array $attributes
	 *
	 * @return string
	 */
	public function render( $attributes = array() ) {
		$args['attributes'] = $this->attributes( $attributes );

		// Add the rendering attributes into global context
		tribe( 'gutenberg.template' )->add_template_globals( $args );

		return tribe( 'gutenberg.template' )->template( array( 'blocks', $this->slug() ), $args, false );
	}
}