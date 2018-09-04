/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import {
	ClockActive,
	ClockInactive,
	TicketActive,
	TicketInactive,
} from '@moderntribe/tickets/icons';

const TicketIcon = ( { unlimited, disabled } ) => {
	if ( unlimited ) {
		return disabled ? <ClockActive /> : <ClockInactive />;
	}
	return disabled ? <TicketActive /> : <TicketInactive />;
};

TicketIcon.defaultProps = {
	unlimited: false,
	disabled: false,
}

TicketIcon.propTypes = {
	unlimited: PropTypes.bool,
	disabled: PropTypes.bool,
}

export default TicketIcon;
