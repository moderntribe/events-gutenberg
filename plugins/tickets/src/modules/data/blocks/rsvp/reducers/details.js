/**
 * External dependencies
 */
import moment from 'moment/moment';

/**
 * Internal dependencies
 */
import { types } from '@moderntribe/tickets/data/blocks/rsvp';
import { moment as momentUtil } from '@moderntribe/common/utils';

export const DEFAULT_STATE = {
	title: '',
	description: '',
	capacity: '',
	notGoingResponses: false,
	startDate: momentUtil.toDate( moment() ),
	startDateObj: new Date( momentUtil.toDate( moment() ) ),
	endDate: momentUtil.toDate( moment() ),
	endDateObj: new Date( momentUtil.toDate( moment() ) ),
	startTime: momentUtil.toTime24Hr( moment() ),
	endTime: momentUtil.toTime24Hr( moment() ),
};

export default ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case types.SET_RSVP_TITLE:
			return {
				...state,
				title: action.payload.title,
			};
		case types.SET_RSVP_DESCRIPTION:
			return {
				...state,
				description: action.payload.description,
			};
		case types.SET_RSVP_CAPACITY:
			return {
				...state,
				capacity: action.payload.capacity,
			};
		case types.SET_RSVP_NOT_GOING_RESPONSES:
			return {
				...state,
				notGoingResponses: action.payload.notGoingResponses,
			};
		case types.SET_RSVP_START_DATE:
			return {
				...state,
				startDate: action.payload.startDate,
			};
		case types.SET_RSVP_START_DATE_OBJ:
			return {
				...state,
				startDateObj: action.payload.startDateObj,
			};
		case types.SET_RSVP_END_DATE:
			return {
				...state,
				endDate: action.payload.endDate,
			};
		case types.SET_RSVP_END_DATE_OBJ:
			return {
				...state,
				endDateObj: action.payload.endDateObj,
			};
		case types.SET_RSVP_START_TIME:
			return {
				...state,
				startTime: action.payload.startTime,
			};
		case types.SET_RSVP_END_TIME:
			return {
				...state,
				endTime: action.payload.endTime,
			};
		default:
			return state;
	}
};
