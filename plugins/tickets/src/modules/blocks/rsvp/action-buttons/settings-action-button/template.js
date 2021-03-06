/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { ActionButton } from '@moderntribe/tickets/elements';
import { Cog as CogIcon } from '@moderntribe/common/src/modules/icons';

const SettingsActionButton = ( { isDisabled, onClick } ) => (
	<ActionButton
		className="tribe-editor__rsvp__action-button tribe-editor__rsvp__action-button--settings"
		disabled={ isDisabled }
		icon={ <CogIcon /> }
		onClick={ onClick }
	>
		{ __( 'Settings', 'events-gutenberg' ) }
	</ActionButton>
);

SettingsActionButton.defaultProps = {
	onClick: noop,
};

SettingsActionButton.propTypes = {
	isDisabled: PropTypes.bool,
	onClick: PropTypes.func,
};

export default SettingsActionButton;
