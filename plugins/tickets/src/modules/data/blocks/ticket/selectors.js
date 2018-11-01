/**
 * External dependencies
 */
import { createSelector } from 'reselect';
import trim from 'lodash/trim';

/**
 * Internal dependencies
 */
import { TICKET_TYPES } from '@moderntribe/tickets/data/utils';
import { config } from '@moderntribe/common/utils/globals';

export const getBlock = ( state ) => state.tickets.blocks.ticket;

// UI selectors

export const getTicketUI = createSelector( [ getBlock ], ( block ) => block.ui );
export const getTicketSettings = createSelector( [ getBlock ], ( block ) => block.settings );
export const getTickets = createSelector( [ getBlock ], ( block ) => block.tickets );

export const getBlockParentSelected = createSelector(
	[ getTicketUI ],
	( ui ) => ui.isParentBlockSelected,
);

export const getChildParentSelected = createSelector(
	[ getTicketUI ],
	( ui ) => ui.isChildBlockSelected,
);

export const getParentOrChildSelected = createSelector(
	[ getBlockParentSelected, getChildParentSelected ],
	( parentSelected, childSelected ) => parentSelected || childSelected,
);

export const getSharedCapacity = createSelector( [ getTicketSettings ], ( settings ) => settings.sharedCapacity );
export const getSharedCapacityInt = createSelector( [ getSharedCapacity ], ( capacity ) => parseInt( capacity, 10 ) );
export const getSettingsIsOpen = createSelector( [ getTicketUI ], ( ui ) => ui.isSettingsOpen );

export const getActiveBlockId = createSelector( [ getTicketUI ], ( ui ) => ui.activeChildBlockId );
export const hasActiveBlockId = createSelector(
	[ getActiveBlockId ],
	( blockId ) => blockId !== '',
);

export const isParentBlockLoading = createSelector(
	[ getTicketUI ],
	( ui ) => ui.isParentBlockLoading,
);

export const getSelectedProvider = createSelector(
	[ getTicketUI ],
	( ui ) => ui.provider,
);

// Temporarily UI selectors

export const getTmpSettings = createSelector(
	[ getTicketSettings ],
	( settings ) => settings.tmp,
);

export const getTmpSharedCapacity = createSelector( getTmpSettings, tmp => tmp.sharedCapacity );

// Header Image

export const getHeader = createSelector( [ getTicketUI ], ( ui ) => ui.header );
export const getImageSize = ( state, props ) => props.size;
export const getImageId = createSelector(
	[ getHeader ],
	( header ) => header === null ? 0 : header.id,
);

export const getImageAlt = createSelector(
	[ getHeader ],
	( header ) => header === null ? '' : header.alt,
);

export const getHeaderSize = createSelector(
	[ getHeader, getImageSize ],
	( header, size ) => {
		if ( header === null || ! header.sizes || ! header.sizes[ size ] ) {
			return '';
		}
		return header.sizes[ size ].url || header.sizes[ size ].source_url;
	},
);

// ticket selectors
export const getTicketBlockId = ( state, props ) => props.blockId;

export const getTicketsIds = createSelector(
	[ getTickets ],
	( tickets ) => tickets.allIds,
);

export const getTicketsObject = createSelector(
	[ getTickets ],
	( tickets ) => tickets.byId,
);

export const getTicketsArray = createSelector(
	[ getTicketsIds, getTicketsObject ],
	( ids, tickets ) => ids.map( ( id ) => tickets[ id ] ),
);

export const getIndependentTickets = createSelector(
	[ getTicketsArray ],
	( tickets ) => (
		tickets.filter( ( ticket ) => ticket.capacityType === TICKET_TYPES.independent )
	),
);

export const getSharedTickets = createSelector(
	[ getTicketsArray ],
	( tickets ) => (
		tickets.filter( ( ticket ) => ticket.capacityType === TICKET_TYPES.shared )
	),
);

export const getSharedTicketsCount = createSelector(
	getSharedTickets,
	tickets => tickets.length
);

export const getUnlimitedTickets = createSelector(
	[ getTicketsArray ],
	( tickets ) => (
		tickets.filter( ( ticket ) => ticket.capacityType === TICKET_TYPES.unlimited )
	),
);

//
// ─── REDUCER ────────────────────────────────────────────────────────────────────
//

const _getTotalCapacity = tickets => tickets.reduce( ( total, ticket ) => {
	const capacity = parseInt( ticket.capacity, 10 ) || 0;
	return total + capacity;
}, 0 );

const _getTotalSold = tickets => tickets.reduce( ( total, ticket ) => {
	const sold = parseInt( ticket.sold, 10 ) || 0;
	return total + sold;
}, 0 );

const _getTotalAvailable = tickets => tickets.reduce( ( total, ticket ) => {
	const available = parseInt( ticket.available, 10 ) || 0;
	return total + available;
}, 0 );

export const getTicketsIndependentCapacity = createSelector( getIndependentTickets, _getTotalCapacity );
export const getTicketsIndependentAvailable = createSelector( getIndependentTickets, _getTotalAvailable );
export const getTicketsSharedCapacity = createSelector( getSharedTickets, _getTotalCapacity );
export const getTicketsSharedAvailable = createSelector( getSharedTickets, _getTotalAvailable );
export const getTotalSold = createSelector( getTicketsArray, _getTotalSold );
export const getTotalAvailable = createSelector(
	[ getTicketsIndependentAvailable, getTicketsSharedAvailable ],
	( independent, shared ) => independent + shared
);
export const getSharedRemainingCapacity = createSelector(
	[ getSharedCapacity, getTicketsSharedCapacity ],
	( globalShared, sharedCapacity ) => Math.max( 0, globalShared - sharedCapacity )
);

export const getTotalCapacity = createSelector(
	[ getSharedCapacityInt, getTicketsIndependentCapacity ],
	( globalShared, independent ) => globalShared + independent,
);

export const getTicketBlock = createSelector(
	[ getTicketsObject, getTicketBlockId ],
	( tickets, blockId ) => tickets[ blockId ] || {},
);

export const getTicketTitle = createSelector(
	[ getTicketBlock ],
	( block ) => block.title,
);

export const getTicketDescription = createSelector(
	[ getTicketBlock ],
	( block ) => block.description,
);

export const getTicketPrice = createSelector(
	[ getTicketBlock ],
	( block ) => block.price,
);

export const getTicketSKU = createSelector(
	[ getTicketBlock ],
	( block ) => block.SKU,
);

export const getTicketStartDate = createSelector(
	[ getTicketBlock ],
	( block ) => block.startDate,
);

export const getTicketStartTime = createSelector(
	[ getTicketBlock ],
	( block ) => block.startTime,
);

export const getTicketEndDate = createSelector(
	[ getTicketBlock ],
	( block ) => block.endDate,
);

export const getTicketEndTime = createSelector(
	[ getTicketBlock ],
	( block ) => block.endTime,
);

export const getTicketCapacity = createSelector(
	[ getTicketBlock ],
	( block ) => {
		const capacity = parseInt( block.capacity, 10 );
		return capacity || 0;
	},
);

export const getTicketCapacityType = createSelector(
	[ getTicketBlock ],
	( block ) => block.capacityType,
);

export const getTicketValidness = createSelector(
	[ getTicketBlock ],
	( block ) => {
		const isTitleValid = trim( block.title ) !== '';
		if ( block.capacityType === TICKET_TYPES.unlimited ) {
			return isTitleValid;
		}

		const isCapacityValid = trim( block.capacity ) !== '';
		return isTitleValid && isCapacityValid;
	},
);

export const getTicketEditing = createSelector(
	[ getTicketBlock ],
	( block ) => block.isEditing,
);

export const getTicketExpires = createSelector(
	[ getTicketBlock ],
	( block ) => ! block.dateIsPristine,
);

export const isUnlimitedTicket = createSelector(
	[ getTicketBlock ],
	( block ) => block.capacityType === TICKET_TYPES.unlimited,
);

export const isSharedTicket = createSelector(
	[ getTicketBlock ],
	( block ) => block.capacityType === TICKET_TYPES.shared,
);

export const getTicketStartDateMoment = createSelector(
	[ getTicketBlock ],
	( block ) => block.startDateMoment,
);

export const getTicketEndDateMoment = createSelector(
	[ getTicketBlock ],
	( block ) => block.endDateMoment,
);

export const getTicketIsLoading = createSelector(
	[ getTicketBlock ],
	( block ) => block.isLoading,
);

export const getTicketHasBeenCreated = createSelector(
	[ getTicketBlock ],
	( block ) => block.hasBeenCreated,
);

export const getTicketId = createSelector(
	[ getTicketBlock ],
	( block ) => block.ticketId,
);

export const getTicketIsBeingEdited = createSelector(
	[ getTicketEditing, getTicketHasBeenCreated ],
	( isEditing, hasBeenCreated ) => isEditing && hasBeenCreated,
);

export const isTicketDisabled = createSelector(
	[ getSettingsIsOpen, getActiveBlockId, getTicketEditing ],
	( isSettingsOpen, activeBlockId, isEditing ) => (
		isSettingsOpen || ( !! activeBlockId && ! isEditing )
	),
);

export const getTicketSold = createSelector(
	[ getTicketBlock ],
	( block ) => parseInt( block.sold, 10 ) || 0,
);

export const getTicketAvailability = createSelector(
	[ getTicketBlock ],
	( block ) => parseInt( block.available, 10 ) || 0,
);

export const getProviders = () => {
	const tickets = config().tickets || {};
	return tickets.providers || [];
};

export const hasTicketProviders = createSelector(
	[ getProviders ],
	( providers ) => providers.length > 0
);

export const getTicketProvider = createSelector(
	[ getTicketBlock ],
	( block ) => block.provider,
);

export const getTicketCurrency = createSelector(
	[ getTicketBlock ],
	( block ) => block.currencySymbol,
);
