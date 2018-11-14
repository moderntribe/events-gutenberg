/**
 * Internal dependencies
 */
import { types } from '@moderntribe/tickets/data/blocks/ticket';

//
// ─── TICKETS ACTIONS ────────────────────────────────────────────────────────────
//

export const setTicketsInitialState = ( props ) => ( {
	type: types.SET_TICKETS_INITIAL_STATE,
	payload: props,
} );

export const setTicketsHeader = ( payload ) => ( {
	type: types.SET_TICKETS_HEADER,
	payload,
} );

export const setTicketsIsSettingsOpen = ( isSettingsOpen ) => ( {
	type: types.SET_TICKETS_IS_SETTINGS_OPEN,
	payload: {
		isSettingsOpen,
	},
} );

export const openSettings = () => setTicketsIsSettingsOpen( true );
export const closeSettings = () => setTicketsIsSettingsOpen( false );

export const setTicketsIsParentBlockLoading = ( isParentBlockLoading ) => ( {
	type: types.SET_TICKETS_IS_PARENT_BLOCK_LOADING,
	payload: {
		isParentBlockLoading,
	},
} );

export const setTicketsIsChildBlockSelected = ( isChildBlockSelected ) => ( {
	type: types.SET_TICKETS_IS_CHILD_BLOCK_SELECTED,
	payload: {
		isChildBlockSelected,
	},
} );

export const setTicketsIsParentBlockSelected = ( isParentBlockSelected ) => ( {
	type: types.SET_TICKETS_IS_PARENT_BLOCK_SELECTED,
	payload: {
		isParentBlockSelected,
	},
} );

export const setTicketsActiveChildBlockId = ( activeChildBlockId ) => ( {
	type: types.SET_TICKETS_ACTIVE_CHILD_BLOCK_ID,
	payload: {
		activeChildBlockId,
	},
} );

export const setTicketsProvider = ( provider ) => ( {
	type: types.SET_TICKETS_PROVIDER,
	payload: {
		provider,
	},
} );

export const setTicketsSharedCapacity = ( sharedCapacity ) => ( {
	type: types.SET_TICKETS_SHARED_CAPACITY,
	payload: {
		sharedCapacity,
	},
} );

export const setTicketsTempSharedCapacity = ( tempSharedCapacity ) => ( {
	type: types.SET_TICKETS_TEMP_SHARED_CAPACITY,
	payload: {
		tempSharedCapacity,
	},
} );

//
// ─── TICKET DETAILS ACTIONS ─────────────────────────────────────────────────────
//

export const setTicketTitle = ( blockId, title ) => ( {
	type: types.SET_TICKET_TITLE,
	payload: {
		blockId,
		title,
	},
} );

export const setTicketDescription = ( blockId, description ) => ( {
	type: types.SET_TICKET_DESCRIPTION,
	payload: {
		blockId,
		description,
	},
} );

export const setTicketPrice = ( blockId, price ) => ( {
	type: types.SET_TICKET_PRICE,
	payload: {
		blockId,
		price,
	},
} );

export const setTicketSku = ( blockId, sku ) => ( {
	type: types.SET_TICKET_SKU,
	payload: {
		blockId,
		sku,
	},
} );

export const setTicketStartDate = ( blockId, startDate ) => ( {
	type: types.SET_TICKET_START_DATE,
	payload: {
		blockId,
		startDate,
	},
} );

export const setTicketStartDateMoment = ( blockId, startDateMoment ) => ( {
	type: types.SET_TICKET_START_DATE_MOMENT,
	payload: {
		blockId,
		startDateMoment,
	},
} );

export const setTicketEndDate = ( blockId, endDate ) => ( {
	type: types.SET_TICKET_END_DATE,
	payload: {
		blockId,
		endDate,
	},
} );

export const setTicketEndDateMoment = ( blockId, endDateMoment ) => ( {
	type: types.SET_TICKET_END_DATE_MOMENT,
	payload: {
		blockId,
		endDateMoment,
	},
} );

export const setTicketStartTime = ( blockId, startTime ) => ( {
	type: types.SET_TICKET_START_TIME,
	payload: {
		blockId,
		startTime,
	},
} );

export const setTicketEndTime = ( blockId, endTime ) => ( {
	type: types.SET_TICKET_END_TIME,
	payload: {
		blockId,
		endTime,
	},
} );

export const setTicketCapacityType = ( blockId, capacityType ) => ( {
	type: types.SET_TICKET_CAPACITY_TYPE,
	payload: {
		blockId,
		capacityType,
	},
} );

export const setTicketCapacity = ( blockId, capacity ) => ( {
	type: types.SET_TICKET_CAPACITY,
	payload: {
		blockId,
		capacity,
	},
} );

//
// ─── TICKET TEMP DETAILS ACTIONS ────────────────────────────────────────────────
//

export const setTicketTempTitle = ( blockId, title ) => ( {
	type: types.SET_TICKET_TEMP_TITLE,
	payload: {
		blockId,
		title,
	},
} );

export const setTicketTempDescription = ( blockId, description ) => ( {
	type: types.SET_TICKET_TEMP_DESCRIPTION,
	payload: {
		blockId,
		description,
	},
} );

export const setTicketTempPrice = ( blockId, price ) => ( {
	type: types.SET_TICKET_TEMP_PRICE,
	payload: {
		blockId,
		price,
	},
} );

export const setTicketTempSku = ( blockId, sku ) => ( {
	type: types.SET_TICKET_TEMP_SKU,
	payload: {
		blockId,
		sku,
	},
} );

export const setTicketTempStartDate = ( blockId, startDate ) => ( {
	type: types.SET_TICKET_TEMP_START_DATE,
	payload: {
		blockId,
		startDate,
	},
} );

export const setTicketTempStartDateMoment = ( blockId, startDateMoment ) => ( {
	type: types.SET_TICKET_TEMP_START_DATE_MOMENT,
	payload: {
		blockId,
		startDateMoment,
	},
} );

export const setTicketTempEndDate = ( blockId, endDate ) => ( {
	type: types.SET_TICKET_TEMP_END_DATE,
	payload: {
		blockId,
		endDate,
	},
} );

export const setTicketTempEndDateMoment = ( blockId, endDateMoment ) => ( {
	type: types.SET_TICKET_TEMP_END_DATE_MOMENT,
	payload: {
		blockId,
		endDateMoment,
	},
} );

export const setTicketTempStartTime = ( blockId, startTime ) => ( {
	type: types.SET_TICKET_TEMP_START_TIME,
	payload: {
		blockId,
		startTime,
	},
} );

export const setTicketTempEndTime = ( blockId, endTime ) => ( {
	type: types.SET_TICKET_TEMP_END_TIME,
	payload: {
		blockId,
		endTime,
	},
} );

export const setTicketTempCapacityType = ( blockId, capacityType ) => ( {
	type: types.SET_TICKET_TEMP_CAPACITY_TYPE,
	payload: {
		blockId,
		capacityType,
	},
} );

export const setTicketTempCapacity = ( blockId, capacity ) => ( {
	type: types.SET_TICKET_TEMP_CAPACITY,
	payload: {
		blockId,
		capacity,
	},
} );

//
// ─── TICKET ACTIONS ─────────────────────────────────────────────────────────────
//

export const setTicketSold = ( blockId, sold ) => ( {
	type: types.SET_TICKET_SOLD,
	payload: {
		blockId,
		sold,
	},
} );

export const setTicketAvailable = ( blockId, available ) => ( {
	type: types.SET_TICKET_AVAILABLE,
	payload: {
		blockId,
		available,
	},
} );

export const setTicketId = ( blockId, ticketId ) => ( {
	type: types.SET_TICKET_ID,
	payload: {
		blockId,
		ticketId,
	},
} );

export const setTicketCurrencySymbol = ( blockId, currencySymbol ) => ( {
	type: types.SET_TICKET_CURRENCY_SYMBOL,
	payload: {
		blockId,
		currencySymbol,
	},
} );

export const setTicketProvider = ( blockId, provider ) => ( {
	type: types.SET_TICKET_PROVIDER,
	payload: {
		blockId,
		provider,
	},
} );

export const setTicketIsLoading = ( blockId, isLoading ) => ( {
	type: types.SET_TICKET_IS_LOADING,
	payload: {
		blockId,
		isLoading,
	},
} );

export const setTicketHasBeenCreated = ( blockId, hasBeenCreated ) => ( {
	type: types.SET_TICKET_HAS_BEEN_CREATED,
	payload: {
		blockId,
		hasBeenCreated,
	},
} );

export const setTicketHasChanges = ( blockId, hasChanges ) => ( {
	type: types.SET_TICKET_HAS_CHANGES,
	payload: {
		blockId,
		hasChanges,
	},
} );

export const setTicketIsSelected = ( blockId, isSelected ) => ( {
	type: types.SET_TICKET_IS_SELECTED,
	payload: {
		blockId,
		isSelected,
	},
} );

export const fetchTicket = ( blockId, ticketId ) => ( {
	type: types.FETCH_TICKET,
	payload: {
		blockId,
		ticketId,
	},
} );

export const createNewTicket = ( blockId ) => ( {
	type: types.CREATE_NEW_TICKET,
	payload: {
		blockId,
	},
} );

export const updateTicket = ( blockId ) => ( {
	type: types.UPDATE_TICKET,
	payload: {
		blockId,
	},
} );

export const deleteTicket = ( blockId ) => ( {
	type: types.DELETE_TICKET,
	payload: {
		blockId,
	}
} );

export const registerTicketBlock = ( blockId ) => ( {
	type: types.REGISTER_TICKET_BLOCK,
	payload: {
		blockId,
	},
} );

export const removeTicketBlock = ( blockId ) => ( {
	type: types.REMOVE_TICKET_BLOCK,
	payload: {
		blockId,
	},
} );

export const setTicketInitialState = ( props ) => ( {
	type: types.SET_TICKET_INITIAL_STATE,
	payload: props,
} );
