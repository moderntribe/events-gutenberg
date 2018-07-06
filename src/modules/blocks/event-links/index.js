/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import EventLinks from './block';
import { Icons } from 'elements';
import { withStore } from 'editor/hoc';

/**
 * Module Code
 */
export default {
	id: 'event-links',
	title: __( 'Event Sharing', 'events-gutenberg' ),
	description: __(
		'Encourage visitors to add your event to their calendars with handy sharing buttons.',
		'events-gutenberg'
	),
	icon: Icons.TEC,
	category: 'common',
	keywords: [ 'event', 'events-gutenberg', 'tribe' ],

	supports: {
		html: false,
	},

	attributes: {
		googleCalendarLabel: {
			type: 'html',
			default: __( 'Google Calendar', 'events-gutenberg' ),
		},
		iCalLabel: {
			type: 'html',
			default: __( 'iCal Export', 'events-gutenberg' ),
		},
		hasiCal: {
			type: 'html',
			default: true,
		},
		hasGoogleCalendar: {
			type: 'html',
			default: true,
		},
	},

	edit: withStore()( EventLinks ),
	save( props ) {
		return null;
	},
};

