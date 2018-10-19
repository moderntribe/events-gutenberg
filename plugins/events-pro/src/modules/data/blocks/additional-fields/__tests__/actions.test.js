/**
 * Internal dependencies
 */
import { actions, utils } from '@moderntribe/events-pro/data/blocks/additional-fields';

describe( 'Actions in Additional Fields', () => {
	test( 'add field', () => {
		expect( actions.addField( 'Host' ) ).toMatchSnapshot();
	} );

	test( 'remove field', () => {
		expect( actions.removeField( 'Host' ) ).toMatchSnapshot();
	} );

	test( 'set field name', () => {
		expect( actions.setFieldName( 'Host' ) ).toMatchSnapshot();
	} );

	test( 'set field is pristine', () => {
		expect( actions.setFieldIsPristine( 'Host', true ) ).toMatchSnapshot();
		expect( actions.setFieldIsPristine( 'Host', false ) ).toMatchSnapshot();
	} );

	test( 'set field value', () => {
		expect( actions.setFieldValue( 'Host', 'Rachel MA' ) ).toMatchSnapshot();
	} );

	test( 'set field type', () => {
		expect( actions.setFieldType( 'Host', utils.FIELD_TYPES.CHECKBOX ) ).toMatchSnapshot();
	} );

	test( 'set field options', () => {
		expect( actions.setFieldOptions( 'Host', [ 'Option 1', 'Option 2 ' ] ) ).toMatchSnapshot();
	} );

	test( 'set field list divider', () => {
		expect( actions.setFieldDividerList( 'Host', ', ' ) ).toMatchSnapshot();
	} );

	test( 'set field divider end', () => {
		expect( actions.setFieldDividerEnd( 'Host', ' & ' ) ).toMatchSnapshot();
	} );
} );