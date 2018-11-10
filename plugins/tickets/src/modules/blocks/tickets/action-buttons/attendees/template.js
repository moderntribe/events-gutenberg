/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { ActionButton } from '@moderntribe/tickets/elements';
import { Attendees } from '@moderntribe/tickets/icons';

const AttendeesActionButton = ( { href, hasProviders } ) => ( hasProviders && (
	<ActionButton
		asLink={ true }
		href={ href }
		icon={ <Attendees /> }
		target="_blank"
	>
		{ __( 'Attendees', 'events-gutenberg' ) }
	</ActionButton>
) );

AttendeesActionButton.propTypes = {
	href: PropTypes.string.isRequired,
	hasProviders: PropTypes.bool,
};

export default AttendeesActionButton;
