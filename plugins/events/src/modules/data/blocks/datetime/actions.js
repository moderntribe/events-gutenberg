/**
 * Internal dependencies
 */
import { DEFAULT_STATE } from './reducers';
import { isSameDay, parseFormats, toDateTime, toMoment } from '@moderntribe/events/editor/utils/moment';
import * as types from './types';

import { maybeBulkDispatch } from '@moderntribe/events/data/utils';

export const setDate = ( from, to ) => ( {
	type: types.SET_DATES,
	meta: {
		from,
		to,
	},
} );

export const setStart = ( start ) => ( {
	type: types.SET_START_DATE_TIME,
	payload: {
		start,
	},
} );

export const setEnd = ( end ) => ( {
	type: types.SET_END_DATE_TIME,
	payload: {
		end,
	},
} );

export const setStartTime = ( seconds ) => ( {
	type: types.SET_START_TIME,
	meta: {
		seconds,
	},
} );

export const setEndTime = ( seconds ) => ( {
	type: types.SET_END_TIME,
	meta: {
		seconds,
	},
} );

export const setSeparatorDate = ( separator ) => ( {
	type: types.SET_SEPARATOR_DATE,
	payload: {
		separator,
	},
} );

export const setSeparatorTime = ( separator ) => ( {
	type: types.SET_SEPARATOR_TIME,
	payload: {
		separator,
	},
} );

export const toggleMultiDay = () => ( { type: types.TOGGLE_MULTI_DAY } );

export const setAllDay = ( allDay ) => ( {
	type: types.SET_ALL_DAY,
	payload: {
		allDay,
	},
} );

export const setMultiDay = ( multiDay ) => ( {
	type: types.SET_MULTI_DAY,
	payload: {
		multiDay,
	},
} );

export const setTimeZone = ( timezone ) => ( {
	type: types.SET_TIME_ZONE,
	payload: {
		timezone,
	},
} );

export const setInitialState = ( { get, attributes } ) => ( dispatch ) => {
	const start = get( 'start', DEFAULT_STATE.start );
	const end = get( 'end', DEFAULT_STATE.end );

	maybeBulkDispatch( attributes, dispatch )( [
		[ setStart, 'start', DEFAULT_STATE.start ],
		[ setEnd, 'end', DEFAULT_STATE.end ],
		[ setAllDay, 'allDay', DEFAULT_STATE.allDay ],
		[ setSeparatorDate, 'separatorDate', DEFAULT_STATE.dateTimeSeparator ],
		[ setSeparatorTime, 'separatorTime', DEFAULT_STATE.timeRangeSeparator ],
		[ setTimeZone, 'timezone', DEFAULT_STATE.timezone ],
	] );

	if ( attributes.start ) {
		dispatch( setStart( toDateTime( parseFormats( attributes.start ) ) ) );
	}

	if ( attributes.end ) {
		dispatch( setEnd( toDateTime( parseFormats( attributes.end ) ) ) );
	}

	// sameDay
	const current = {
		start: toMoment( start ),
		end: toMoment( end ),
	};
	dispatch( setMultiDay( ! isSameDay( current.start, current.end ) ) );
};