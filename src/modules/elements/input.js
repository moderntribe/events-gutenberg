/**
 * Dependencies
 */
import { Component } from '@wordpress/element'
import { isFunction, noop } from 'lodash'
import PropTypes from 'prop-types'
import validator from 'validator'

/**
 * Input element that adds two important properties:
 *
 * - required
 * - validate
 *
 * Both properties are helpful to provide validation based on the type of the element also has the option to add a cusotm
 * validation callback with the property validateCallback.
 *
 * <Input />
 *
 * Abstraction on top of the native <input> element it gives external instance methods such as:
 *
 * - isValid()
 * - focus()
 */
class Input extends Component {

	/**
	 * Default types for properties required for this component
	 *
	 * @param validated {boolean} If this component needs to be validated
	 * @param required {boolean} If this input is required
	 *
	 * @type {{validated: shim, required: shim}}
	 */
	static propTypes = {
		validate: PropTypes.bool,
		required: PropTypes.bool,
	}

	/**
	 * Set the default values for the required properties if not provided
	 *
	 * @type {{required: boolean, validate: boolean}}
	 */
	static defaultProps = {
		required: false,
		validate: false,
	}

	constructor () {
		super( ...arguments )

		this.state = {
			isValid: this.validate( '' ),
		}
	}

	/**
	 * Callback fired every time the input changes, if the property onChange is passed to the component is called as well
	 * synchronously.
	 *
	 * @param event
	 */
	onChange = ( event ) => {
		const { onChange, onComplete, validate } = this.props
		let callback = isFunction( onChange ) ? onChange : noop
		let completeCallback = isFunction( onComplete ) ? onComplete : noop

		if ( validate ) {
			this.setState( { isValid: this.validate( event.target.value ) }, completeCallback )
			callback( event )
		} else {
			completeCallback()
			callback( event )
		}
	}

	/**
	 * Validates the component using validateCallback if provided or using the logic based on the type inferring
	 *
	 * @param value
	 * @returns {boolean}
	 */
	validate ( value ) {
		const { validateCallback } = this.props
		return isFunction( validateCallback ) ? validateCallback( value ) : this.maybeValidate( value )
	}

	/**
	 * If the input is empty does not make any validation unless the value is required otherwise it uses the validation
	 * based on the type="url" of the <input> component.
	 *
	 * @param value
	 * @returns {boolean}
	 */
	maybeValidate = ( value ) => {
		const { type, required } = this.props

		if ( value.length === 0 ) {
			return !required
		}

		let isValid = true
		switch ( type ) {
			case 'phone':
				isValid = validator.isMobilePhone( value, 'any' )
				break
			case 'email':
				isValid = validator.isEmail( value )
				break
			case 'url':
				isValid = validator.isURL( value );
			case 'number':
				isValid = validator.isNumeric( value );
				break;
		}
		return isValid
	}

	/**
	 * If the component is valid or not based on the validation logic
	 *
	 * @returns {boolean}
	 */
	isValid () {
		return this.state.isValid
	}

	/**
	 * Focus to the current component input
	 */
	focus () {
		this.input.focus()
	}

	/**
	 * If the Component is valid is going to Append the class: `is-valid` otherwise if it fails is going to use the
	 * class `is-invalid`.
	 *
	 * @returns {string|*}
	 */
	getClassName () {
		const { className, validate } = this.props
		const { isValid } = this.state
		let classes = className ? className.split( ' ' ) : []

		if ( validate ) {
			if ( isValid ) {
				classes.push( 'tribe-is-valid' )
			} else {
				classes.push( 'tribe-is-invalid' )
			}
		}

		return classes
			.filter( ( className ) => className && className.length )
			.join( ' ' )
	}

	render () {
		// Remove properties that are not part of the DOM.
		const { onComplete, required, validate, ...properties } = this.props
		return <input
			{...properties}
			className={`${this.getClassName()}`}
			ref={( input ) => this.input = input}
			onChange={this.onChange}
		/>
	}
}

export default Input
