/**
 * Internal dependencies
 */
import * as types from '@moderntribe/tickets/data/blocks/ticket/types';
import { getDefaultProviderCurrency } from '@moderntribe/tickets/data/blocks/ticket/utils';
import details, { DEFAULT_STATE as DETAILS_DEFAULT_STATE } from './ticket/details';
import tempDetails, { DEFAULT_STATE as TEMP_DETAILS_DEFAULT_STATE } from './ticket/temp-details';

export const DEFAULT_STATE = {
	details: DETAILS_DEFAULT_STATE,
	tempDetails: TEMP_DETAILS_DEFAULT_STATE,
	sold: 0,
	available: 0,
	ticketId: 0,
	currencySymbol: getDefaultProviderCurrency(),
	provider: '',
	expires: true,
	isLoading: false,
	hasBeenCreated: false,
	hasChanges: false,
};

export default ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case types.SET_TICKET_TITLE:
		case types.SET_TICKET_DESCRIPTION:
		case types.SET_TICKET_PRICE:
		case types.SET_TICKET_SKU:
		case types.SET_TICKET_START_DATE:
		case types.SET_TICKET_START_DATE_MOMENT:
		case types.SET_TICKET_END_DATE:
		case types.SET_TICKET_END_DATE_MOMENT:
		case types.SET_TICKET_START_TIME:
		case types.SET_TICKET_END_TIME:
		case types.SET_TICKET_CAPACITY_TYPE:
		case types.SET_TICKET_CAPACITY:
			return {
				...state,
				details: details( state.details, action ),
			};
		case types.SET_TICKET_TEMP_TITLE:
		case types.SET_TICKET_TEMP_DESCRIPTION:
		case types.SET_TICKET_TEMP_PRICE:
		case types.SET_TICKET_TEMP_SKU:
		case types.SET_TICKET_TEMP_START_DATE:
		case types.SET_TICKET_TEMP_START_DATE_MOMENT:
		case types.SET_TICKET_TEMP_END_DATE:
		case types.SET_TICKET_TEMP_END_DATE_MOMENT:
		case types.SET_TICKET_TEMP_START_TIME:
		case types.SET_TICKET_TEMP_END_TIME:
		case types.SET_TICKET_TEMP_CAPACITY_TYPE:
		case types.SET_TICKET_TEMP_CAPACITY:
			return {
				...state,
				tempDetails: tempDetails( state.tempDetails, action ),
			};
		case types.SET_TICKET_SOLD:
			return {
				...state,
				sold: action.payload.sold,
			};
		case types.SET_TICKET_AVAILABLE:
			return {
				...state,
				available: action.payload.available,
			};
		case types.SET_TICKET_ID:
			return {
				...state,
				ticketId: action.payload.ticketId,
			};
		case types.SET_TICKET_CURRENCY_SYMBOL:
			return {
				...state,
				currencySymbol: action.payload.currencySymbol,
			};
		case types.SET_TICKET_PROVIDER:
			return {
				...state,
				provider: action.payload.provider,
			};
		case types.SET_TICKET_EXPIRES:
			return {
				...state,
				expires: action.payload.expires,
			};
		case types.SET_TICKET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload.isLoading,
			};
		case types.SET_TICKET_HAS_BEEN_CREATED:
			return {
				...state,
				hasBeenCreated: action.payload.hasBeenCreated,
			};
		case types.SET_TICKET_HAS_CHANGES:
			return {
				...state,
				hasChanges: action.payload.hasChanges,
			};
		default:
			return state;
	}
};
