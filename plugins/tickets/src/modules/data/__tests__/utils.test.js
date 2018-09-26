/**
 * Internal dependencies
 */
import * as utils from '@moderntribe/tickets/data/utils';

describe( 'Tickets prefix', () => {
	it( 'should follow prefix convention', () => {
		expect( utils.PREFIX_TICKETS_STORE ).toBe( '@@MT/TICKETS' );
	} );
} );

describe( 'Tickets keys', () => {
	test( 'rsvp for event', () => {
		expect( utils.KEY_RSVP_FOR_EVENT ).toBe( '_tribe_rsvp_for_event' );
	} );

	test( 'ticket show description', () => {
		expect( utils.KEY_TICKET_SHOW_DESCRIPTION ).toBe( '_tribe_ticket_show_description' );
	} );

	test( 'price', () => {
		expect( utils.KEY_PRICE ).toBe( '_price' );
	} );

	test( 'ticket capacity', () => {
		expect( utils.KEY_TICKET_CAPACITY ).toBe( '_tribe_ticket_capacity' );
	} );

	test( 'ticket start date', () => {
		expect( utils.KEY_TICKET_START_DATE ).toBe( '_ticket_start_date' );
	} );

	test( 'ticket end date', () => {
		expect( utils.KEY_TICKET_END_DATE ).toBe( '_ticket_end_date' );
	} );

	test( 'ticket show not going', () => {
		expect( utils.KEY_TICKET_SHOW_NOT_GOING ).toBe( '_tribe_ticket_show_not_going' );
	} );

	test( 'ticket header', () => {
		expect( utils.KEY_TICKET_HEADER ).toBe( '_tribe_ticket_header' );
	} );
} );
