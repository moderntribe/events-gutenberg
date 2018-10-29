<?php

/**
 * Allow including of Gutenberg Template
 *
 * @since TBD
 */
class Tribe__Gutenberg__Events_Pro__Template__Frontend extends Tribe__Template {
	/**
	 * Building of the Class template configuration
	 *
	 * @since TBD
	 */
	public function __construct() {
		$this->set_template_origin( tribe( 'gutenberg.events-pro.plugin' ) );
		$this->set_template_folder( 'src/views' );
		
		// Configures this templating class extract variables
		$this->set_template_context_extract( true );
	}
	
	/**
	 * Return the attributes of the template
	 *
	 * @since TBD
	 *
	 * @param array $default_attributes
	 * @return array
	 */
	public function attributes( $default_attributes = array() ) {
		return wp_parse_args(
			$this->get( 'attributes', array() ),
			$default_attributes
		);
	}
	
	/**
	 * Return a specific attribute
	 *
	 * @since TBD
	 *
	 * @param  mixed $default
	 * @return mixed
	 */
	public function attr( $index, $default = null ) {
		return $this->get( array_merge( array( 'attributes' ), (array) $index ), array(), $default );
	}
}
