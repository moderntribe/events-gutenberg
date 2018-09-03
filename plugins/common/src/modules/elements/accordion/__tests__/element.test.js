/**
 * External dependencies
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import { Accordion } from '@moderntribe/common/elements';

let rows;

describe( 'Accordion Element', () => {
	beforeEach( () => {
		rows = [
			{
				content: "this is a content",
				contentClassName: "content-class",
				contentId: "content-id-1",
				header: "this is header",
				headerClassName: "header-class",
				headerId: "header-id-1",
				isActive: true,
				onClick: noop,
			},
		];
	} );

	it( 'renders null', () => {
		const component = renderer.create( <Accordion /> );
		expect( component.toJSON() ).toMatchSnapshot();
	} );

	it( 'renders an accordion', () => {
		const component = renderer.create( <Accordion rows={ rows } /> );
		expect( component.toJSON() ).toMatchSnapshot();
	} );

	it( 'renders an accordion with wrapper class', () => {
		const component = renderer.create( <Accordion className="test-class" rows={ rows } /> );
		expect( component.toJSON() ).toMatchSnapshot();
	} );

	it( 'renders an accordion with inactive state', () => {
		rows[0].isActive = false;
		const component = renderer.create( <Accordion rows={ rows } /> );
		expect( component.toJSON() ).toMatchSnapshot();
	} );
} );
