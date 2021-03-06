/**
 * Wordpress dependenciess
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { settings, priceSettings } from '@moderntribe/common/utils/globals';
import { string } from '@moderntribe/common/utils';
import * as types from './types';

const position = string.isTruthy( settings() && settings().reverseCurrencyPosition )
	? 'suffix'
	: 'prefix';

export const DEFAULT_STATE = {
	position: priceSettings() && priceSettings().default_currency_position
		? priceSettings().default_currency_position
		: position,
	symbol: priceSettings() && priceSettings().default_currency_symbol
		? priceSettings().default_currency_symbol
		: __( '$', 'events-gutenberg' ),
	cost: '',
	description: '',
};

export default ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case types.SET_PRICE_COST:
			return {
				...state,
				cost: action.payload.cost,
			};
		case types.SET_PRICE_POSITION:
			return {
				...state,
				position: action.payload.position,
			};
		case types.SET_PRICE_SYMBOL:
			return {
				...state,
				symbol: action.payload.symbol,
			};
		case types.SET_PRICE_DESCRIPTION:
			return {
				...state,
				description: action.payload.description,
			};
		default:
			return state;
	}
};
