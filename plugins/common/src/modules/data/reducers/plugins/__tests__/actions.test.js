/**
 * Internal dependencies
 */
import { actions } from '@moderntribe/common/data/reducers/plugins';

describe( 'Plugin actions', () => {
	test( 'Add Plugin', () => {
		expect( actions.addPlugin( 'events' ) ).toMatchSnapshot();
	} );

	test( 'Remove Plugin', () => {
		expect( actions.removePlugin( 'events' ) ).toMatchSnapshot();
	} );

	test( 'Activate Plugin', () => {
		expect( actions.activatePlugin( 'events' ) ).toMatchSnapshot();
	} );

	test( 'Deactivate Plugin', () => {
		expect( actions.deactivatePlugin( 'events' ) ).toMatchSnapshot();
	} );
} );