/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import './style.pcss';

const Checkbox = ( {
	checked,
	className,
	disabled,
	id,
	label,
	onChange,
	name,
	value,
} ) => {
	return (
		<div className={ classNames( 'tribe-editor__checkbox', className ) }>
			<input
				checked={ checked }
				className="tribe-editor__checkbox__input"
				disabled={ disabled }
				id={ id }
				name={ name }
				onChange={ onChange }
				type="checkbox"
				value={ value }
			/>
			<label
				className="tribe-editor__checkbox__label"
				htmlFor={ id }
			>
				{ label }
			</label>
		</div>
	);
};

Checkbox.defaultProps = {
	checked: false,
	onChange: noop,
}

Checkbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	id: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default Checkbox;
