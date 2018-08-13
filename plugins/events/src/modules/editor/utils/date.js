import { getItems } from '@moderntribe/events/elements/timezone-picker/element';
import { get, identity } from 'lodash';

/**
 * Internal dependencies
 */

const WPDateSettings = get( window, 'tribe_date_settings', {} );
const { formats = {}, timezone = {} } = WPDateSettings;
import { toMoment } from 'editor/utils/moment';

export const FORMATS = {
	TIME: 'HH:mm:ss',
	DATE_TIME: 'YYYY-MM-DD HH:mm:ss',
	WP: {
		time: 'g:i a',
		date: 'F j, Y',
		datetime: 'F j, Y g:i a',
		dateNoYear: 'F j',
		...formats,
	},
	TIMEZONE: {
		string: 'UTC',
		...timezone,
	},
	DATABASE: {
		date: 'Y-m-d',
		datetime: 'Y-m-d H:i:s',
		time: 'H:i:s',
	},
};

export const TODAY = new Date();

/**
 * Make sure all the Dates objects are on the same time
 *
 * @param {Date} params 0 to N set of Dates params
 * @returns {boolean} true if all the dates have the same timestamp
 */
export function equalDates( ...params ) {
	if ( params.length === 0 ) {
		return false;
	}

	const dates = params.filter( ( item ) => item instanceof Date );
	const [ first, ...rest ] = dates;

	return (
		dates.length === params.length &&
		rest.every( ( item ) => item.getTime() === first.getTime() )
	);
}

export function timezonesAsSelectData() {
	return timezones().map( ( tzone ) => {
		return {
			value: tzone.key,
			label: tzone.text,
		};
	} );
}

export function timezones() {
	return getItems()
		.map( ( group ) => group.options || [] )
		.reduce( ( prev, current ) => [ ...prev, ...current ], [] );
}

export function toNaturalLanguage( date = null, format = { date: 'MMM D YYYY', time: 'h:mm a' } ) {
	const parsed = {
		text: '',
		moment: date && toMoment( date ),
	};

	const { moment } = parsed;
	if ( moment && moment.isValid() ) {
		parsed.text = `${ moment.format( format.date ) } at ${ moment.format( format.time ) }`;
	}
	return parsed;
}

export function rangeToNaturalLanguage( start = '', end = '' ) {
	const from = toNaturalLanguage( start );
	const to = toNaturalLanguage( end );
	const parts = [
		from.text,
		to.text,
	];
	return parts.filter( identity ).join( ' - ' );
}