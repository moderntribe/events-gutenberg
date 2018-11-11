/**
 * External dependencies
 */
import moment from 'moment/moment';

/**
 * Internal dependencies
 */
import * as constants from '@moderntribe/tickets/data/blocks/ticket/constants';
import * as types from '@moderntribe/tickets/data/blocks/ticket/types';
import { moment as momentUtil } from '@moderntribe/common/utils';

const currentMoment = moment();
const ADDITIONAL_DAYS = 3;

export const DEFAULT_STATE = {
	title: '',
	description: '',
	price: '',
	sku: '',
	startDate: momentUtil.toDate( currentMoment ),
	startDateMoment: currentMoment,
	endDate: momentUtil.toDate( currentMoment.clone().add( ADDITIONAL_DAYS, 'days' ) ),
	endDateMoment: currentMoment,
	startTime: momentUtil.toTime24Hr( currentMoment ),
	endTime: momentUtil.toTime24Hr( currentMoment ),
	capacityType: constants.TICKET_TYPES[ constants.SHARED ],
	capacity: '',
};

export default ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case types.SET_TICKET_TITLE:
			return {
				...state,
				title: action.payload.title
			};
		case types.SET_TICKET_DESCRIPTION:
			return {
				...state,
				description: action.payload.description
			};
		case types.SET_TICKET_PRICE:
			return {
				...state,
				price: action.payload.price
			};
		case types.SET_TICKET_SKU:
			return {
				...state,
				sku: action.payload.sku
			};
		case types.SET_TICKET_START_DATE:
			return {
				...state,
				startDate: action.payload.startDate
			};
		case types.SET_TICKET_START_DATE_MOMENT:
			return {
				...state,
				startDateMoment: action.payload.startDateMoment
			};
		case types.SET_TICKET_END_DATE:
			return {
				...state,
				endDate: action.payload.endDate
			};
		case types.SET_TICKET_END_DATE_MOMENT:
			return {
				...state,
				endDateMoment: action.payload.endDateMoment
			};
		case types.SET_TICKET_START_TIME:
			return {
				...state,
				startTime: action.payload.startTime
			};
		case types.SET_TICKET_END_TIME:
			return {
				...state,
				endTime: action.payload.endTime
			};
		case types.SET_TICKET_CAPACITY_TYPE:
			return {
				...state,
				capacityType: action.payload.capacityType
			};
		case types.SET_TICKET_CAPACITY:
			return {
				...state,
				capacity: action.payload.capacity
			};
		default:
			return state;
	}
};
