/**
 * Internal dependencies
 */
import ticket, { DEFAULT_STATE } from '../ticket';
import { actions } from '@moderntribe/tickets/data/blocks/ticket';

const blockId = 'modern-tribe';

jest.mock( 'moment', () => () => {
	const moment = require.requireActual( 'moment' );
	return moment( 'January 10, 2018 5:30 pm', 'MMMM D, Y h:mm a' );
} );

describe( 'Individual Ticket reducer', () => {
	test( 'default state', () => {
		expect( ticket( undefined, {} ) ).toBe( DEFAULT_STATE );
	} );

	test( 'ticket title', () => {
		expect( ticket( DEFAULT_STATE, actions.setTitle( blockId, 'Modern Tribe' ) ) )
			.toMatchSnapshot();
	} );

	test( 'ticket description', () => {
		expect(
			ticket(
				DEFAULT_STATE,
				actions.setDescription( blockId, 'The Next Generation of Digital Agency' ),
			),
		).toMatchSnapshot();
	} );

	test( 'ticket price', () => {
		expect( ticket( DEFAULT_STATE, actions.setPrice( blockId, 102 ) ) ).toMatchSnapshot();
	} );

	test( 'ticket sku', () => {
		expect( ticket( DEFAULT_STATE, actions.setSKU( blockId, 'MODERN-TRIBE' ) ) ).toMatchSnapshot();
	} );

	test( 'ticket start date', () => {
		expect( ticket( DEFAULT_STATE, actions.setStartDate( 'January 10, 2018' ) ) ).toMatchSnapshot();
	} );

	test( 'ticket end date', () => {
		expect( ticket( DEFAULT_STATE, actions.setStartDate( 'January 20, 2018' ) ) ).toMatchSnapshot();
	} );

	test( 'ticket start time', () => {
		expect( ticket( DEFAULT_STATE, actions.setEndTime( '10:30' ) ) ).toMatchSnapshot();
	} );

	test( 'ticket end time', () => {
		expect( ticket( DEFAULT_STATE, actions.setEndTime( '12:30' ) ) ).toMatchSnapshot();
	} );

	test( 'ticket capacity', () => {
		expect( ticket( DEFAULT_STATE, actions.setCapacity( blockId, 49 ) ) ).toMatchSnapshot();
	} );

	test( 'ticket capacity type', () => {
		expect( ticket( DEFAULT_STATE, actions.setCapacityType( blockId, 59 ) ) ).toMatchSnapshot();
	} );

	test( 'ticket is editing', () => {
		expect( ticket( DEFAULT_STATE, actions.setTicketIsEditing( blockId, true ) ) )
			.toMatchSnapshot();
		expect( ticket( DEFAULT_STATE, actions.setTicketIsEditing( blockId, true ) ) )
			.toMatchSnapshot();
	} );

	test( 'Set ticket post ID', () => {
		expect( ticket( DEFAULT_STATE, actions.setTicketPostId( 10 ) ) ).toMatchSnapshot();
	} );

	test( 'Set ticket pristine', () => {
		expect( ticket( DEFAULT_STATE, actions.setTicketDateIsPristine( true ) ) ).toMatchSnapshot();
		expect( ticket( DEFAULT_STATE, actions.setTicketDateIsPristine( false ) ) ).toMatchSnapshot();
	} );
} );
