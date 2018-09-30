/**
 * Internal dependencies
 */
import { selectors, actions } from '@moderntribe/tickets/data/blocks/ticket';
import { DEFAULT_STATE } from '@moderntribe/tickets/data/blocks/ticket/reducers/ui';
import {
	DEFAULT_STATE as TICKET_DEFAULT_STATE,
} from '@moderntribe/tickets/data/blocks/ticket/reducers/ticket';

jest.mock( 'moment', () => () => {
	const moment = require.requireActual( 'moment' );
	return moment( 'September 1, 2018 10:30 pm', 'MMMM D, Y h:mm a' );
} );

const state = {
	tickets: {
		blocks: {
			ticket: {
				ui: {
					...DEFAULT_STATE,
				},
				tickets: {
					byId: {},
					allIds: [],
				},
			},
		},
	},
};

const image = {
	id: 4961,
	title: 'aircraft-1362586_1920',
	filename: 'aircraft-1362586_1920.jpg',
	url: 'http://gutenberg.local/wp-content/uploads/2018/09/aircraft-1362586_1920.jpg',
	link: 'http://gutenberg.local/event/tickets-here/aircraft-1362586_1920/',
	sizes: {
		full: {
			url: 'http://gutenberg.local/wp-content/uploads/2018/09/aircraft-1362586_1920.jpg',
			height: 1211,
			width: 1920,
			orientation: 'landscape',
		},
		large: {
			height: 331,
			width: 525,
			url: 'http://gutenberg.local/wp-content/uploads/2018/09/aircraft-1362586_1920-1024x646.jpg',
			orientation: 'landscape',
		},
		medium: {
			height: 189,
			width: 300,
			url: 'http://gutenberg.local/wp-content/uploads/2018/09/aircraft-1362586_1920-300x189.jpg',
			orientation: 'landscape',
		},
		thumbnail: {
			height: 150,
			width: 150,
			url: 'http://gutenberg.local/wp-content/uploads/2018/09/aircraft-1362586_1920-150x150.jpg',
			orientation: 'landscape',
		},
	},
};

describe( 'Ticket blocks selectors', () => {
	let newState = {};

	beforeEach( () => {
		newState = {
			tickets: {
				blocks: {
					ticket: {
						ui: {
							...DEFAULT_STATE,
						},
						tickets: {
							allIds: [ 'modern-tribe' ],
							byId: {
								'modern-tribe': { ...TICKET_DEFAULT_STATE },
							},
						},
					},
				},
			},
		};
	} );

	describe( 'Header image', () => {
		test( 'Select default image', () => {
			expect( selectors.getHeader( state ) ).toBe( null );
		} );

		test( 'Select set image', () => {
			newState.tickets.blocks.ticket.ui.header = image;
			expect( selectors.getHeader( newState ) ).toEqual( image );
		} );

		test( 'Select image id', () => {
			newState.tickets.blocks.ticket.ui.header = image;
			expect( selectors.getImageID( state ) ).toBe( 0 );
			expect( selectors.getImageID( newState ) ).toBe( 4961 );
		} );

		test( 'Select image size', () => {
			newState.tickets.blocks.ticket.ui.header = image;
			expect( selectors.getHeaderSize( newState, { size: 'large' } ) )
				.toEqual( image.sizes.large.url );
			expect( selectors.getHeaderSize( newState, { size: 'unknown' } ) ).toBe( '' );
		} );
	} );

	describe( 'Shared capacity', () => {
		test( 'Select shared capacity', () => {
			expect( selectors.getSharedCapacity( state ) ).toBe( '' );
		} );

		test( 'Select shared capacity after being set', () => {
			newState.tickets.blocks.ticket.ui.sharedCapacity = 99;
			expect( selectors.getSharedCapacity( newState ) ).toBe( 99 );
		} );
	} );

	describe( 'Total capacity', () => {
		test( 'Default value of total capacity', () => {
			expect( selectors.getTotalCapacity( state ) ).toBe( 0 );
		} );

		test( 'Value of total capacity when sharedCapacity is only set', () => {
			newState.tickets.blocks.ticket.ui.sharedCapacity = 15;
			expect( selectors.getTotalCapacity( newState ) ).toBe( 0 );
		} );
	} );

	describe( 'Dashboard settings', () => {
		test( 'Default value of settings dashboard', () => {
			expect( selectors.getSettingsIsOpen( state ) ).toBe( false );
		} );

		test( 'Custom value of settings dashboard', () => {
			newState.tickets.blocks.ticket.ui.isSettingsOpen = true;
			expect( selectors.getSettingsIsOpen( newState ) ).toBe( true );
		} );
	} );

	describe( 'Ticket selectors', () => {
		const ownProps = { blockId: 'modern-tribe' };

		test( 'Expires value', () => {
			expect( selectors.getTicketExpires( newState, ownProps ) ).toBe( false );
		} );

		test( 'Expiring ticket', () => {
			newState.tickets.blocks.ticket.tickets.byId['modern-tribe'].dateIsPristine = false;
			expect( selectors.getTicketExpires( newState, ownProps ) ).toBe( true );
		} );

		test( 'Select the group of tickets', () => {
			expect( selectors.getTicketsIds( newState ) ).toMatchSnapshot();
			expect( selectors.getTicketsIds( newState ) ).toMatchSnapshot();
			expect( selectors.getTicketsObject( newState ) ).toMatchSnapshot();
		} );

		test( 'Select type of tickets', () => {
			expect( selectors.getIndependentTickets( newState ) ).toMatchSnapshot();
			expect( selectors.getSharedTickets( newState ) ).toMatchSnapshot();
			expect( selectors.getUnlimitedTickets( newState ) ).toMatchSnapshot();
		} );

		test( 'Select ticket capacity', () => {
			expect( selectors.getTicketsSharedCapacity( newState ) ).toBe( 0 );
			expect( selectors.getTicketsIndependentCapacity( newState ) ).toBe( 0 );
			expect( selectors.getTotalCapacity( newState ) ).toBe( 0 );
		} );

		test( 'Select totals sold', () => {
			expect( selectors.getTotalSold( newState ) ).toBe( 0 );
		} );

		test( 'Ticket dates and times', () => {
			expect( selectors.getTicketStartTime( newState, ownProps ) )
				.toMatchSnapshot();
			expect( selectors.getTicketEndTime( newState, ownProps ) )
				.toMatchSnapshot();
			expect( selectors.getTicketEndDate( newState, ownProps ) )
				.toMatchSnapshot();
			expect( selectors.getTicketStartDate( newState, ownProps ) )
				.toMatchSnapshot();
		} );

		test( 'Ticket fields', () => {
			expect( selectors.getTicketTitle( newState, ownProps ) ).toMatchSnapshot();
			expect( selectors.getTicketDescription( newState, ownProps ) ).toMatchSnapshot();
			expect( selectors.getTicketSKU( newState, ownProps ) ).toMatchSnapshot();
			expect( selectors.getTicketPrice( newState, ownProps ) ).toMatchSnapshot();
			expect( selectors.getTicketCapacityType( newState, ownProps ) ).toMatchSnapshot();
			expect( selectors.getTicketEditing( newState, ownProps ) ).toMatchSnapshot();
			expect( selectors.getTicketSold( newState, ownProps ) ).toMatchSnapshot();
			expect( selectors.getTicketCapacity( newState, ownProps ) ).toBe( 0 );
			expect( selectors.isUnlimitedTicket( newState, ownProps ) ).toBe( false );
			expect( selectors.isSharedTicket( newState, ownProps ) ).toBe( false );
		} );

		test( 'Ticket validness', () => {
			newState.tickets.blocks.ticket.tickets.byId[ 'modern-tribe' ].title = 'Modern Tribe';
			newState.tickets.blocks.ticket.tickets.byId[ 'modern-tribe' ].capacity = '20';
			expect( selectors.getTicketValidness( newState, ownProps ) ).toBe( true );
		} );

		test( 'Ticket invalidness', () => {
			expect( selectors.getTicketValidness( newState, ownProps ) ).toBe( false );
		} );
	} );
} );

