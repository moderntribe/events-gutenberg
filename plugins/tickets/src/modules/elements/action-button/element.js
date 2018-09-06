/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import { Button } from '@moderntribe/common/src/modules/elements';
import './style.pcss';

export const positions = {
	right: 'right',
	left: 'left',
};

const ActionButton = ( { children, icon, position, ...props } ) => {
	const containerClass = classNames(
		'tribe-editor__btn--label',
		'tribe-editor__tickets-btn--action',
		`tribe-editor__tickets-btn--action-${ position }`,
	);

	return (
		<Button
			className={ containerClass }
			{ ...props }
		>
			{ icon }{ children }
		</Button>
	);
}

ActionButton.propTypes = {
	children: PropTypes.node,
	icon: PropTypes.node.isRequired,
	position: PropTypes.oneOf( Object.keys( positions ) ),
};

ActionButton.defaultProps = {
	position: positions.right,
}

export default ActionButton;
