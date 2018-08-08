/**
 * Internal dependencies
 */
import * as types from './types';

export const setNaturalLanguageLabel = ( label ) => ( {
	type: types.SET_NATURAL_LANGUAGE_LABEL,
	payload: {
		label,
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

export const setTimeZone = ( timeZone ) => ( {
	type: types.SET_TIME_ZONE,
	payload: {
		timeZone,
	},
} );

export const setTimeZoneLabel = ( label ) => ( {
	type: types.SET_TIMEZONE_LABEL,
	payload: {
		label,
	},
} );

export const setTimeZoneVisibility = ( show ) => ( {
	type: types.SET_TIMEZONE_VISIBILITY,
	payload: {
		show,
	},
} );
