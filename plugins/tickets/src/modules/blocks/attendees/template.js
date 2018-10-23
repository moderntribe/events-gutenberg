/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AutosizeInput from 'react-input-autosize';

/**
 * WordPress dependencies
 */
import { Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { input } from '@moderntribe/common/utils';
import { AttendeesGravatar } from '@moderntribe/tickets/icons';
import './style.pcss';

/**
 * Module Code
 */

const placeholder = __( 'Who\'s Attending?', 'events-gutenberg' );

const renderLabelInput = ( { isSelected, isEmpty, title, setTitle } ) => {
	const containerClassNames = classNames( {
		'tribe-editor__event-attendees__title': true,
		'tribe-editor__event-attendees__title--selected': isSelected,
	} );

	const inputClassNames = classNames( {
		'tribe-editor__event-attendees__title-text': true,
		'tribe-editor__event-attendees__title-text--empty': isEmpty && isSelected,
	} );

	return (
		<div
			key="tribe-events-attendees-label"
			className={ containerClassNames }
		>
			<AutosizeInput
				id="tribe-events-attendees-link"
				className={ inputClassNames }
				value={ title }
				placeholder={ placeholder }
				onChange={ input.sendValue( setTitle ) }
			/>
		</div>
	);
}

const renderPlaceholder = () => {
	const classes = [
		'tribe-editor__event-attendees__title',
		'tribe-editor__event-attendees__title--placeholder',
	];

	return (
		<button className={ classNames( classes ) }>
			{ placeholder }
		</button>
	);
}

const renderGravatars = () => {

	return (
		<div className="tribe-editor__event-attendees__gravatars">
			<AttendeesGravatar />
			<AttendeesGravatar />
			<AttendeesGravatar />
			<AttendeesGravatar />
			<AttendeesGravatar />
		</div>
	);

}

const Attendees = ( { isSelected, title } ) => {

	const blockTitle = ! ( isSelected || title ) 
		? renderPlaceholder()
		: [ renderLabelInput( props ) ];

	return (
		<div className="tribe-editor__block tribe-editor__event-attendees">
			{ blockTitle }
			{ renderGravatars() }
		</div>
	);

}

Attendees.propTypes = {
	setTitle: PropTypes.func,
}

export default Attendees;
