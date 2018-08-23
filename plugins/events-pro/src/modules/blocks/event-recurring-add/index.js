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
import EventRecurringAdd from './container';
import { Icons } from '@moderntribe/events/elements';

/**
 * Module Code
 */

export default {
	id: 'event-pro-recurring-add',
	title: __( 'Event Add Rule', 'events-gutenberg' ),
	description: __(
		'Add exceptions to your event.',
		'events-gutenberg'
	),
	icon: Icons.TEC,
	category: 'tribe-events',
	keywords: [ 'event', 'events-gutenberg', 'tribe' ],

	parent: [ 'tribe/event-datetime' ],

	supports: {
		html: false,
	},

	attributes: {
	},

	edit: EventRecurringAdd,

	save( props ) {
		return null;
	},
};
