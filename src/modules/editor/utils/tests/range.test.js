import {
	parseChars,
	extractParts,
	parser,
} from './../range';

test( 'parseChars', () => {
	expect( parseChars( '' ) ).toEqual( '' );
	expect( parseChars( '12312312321321 123123123123' ) ).toEqual( '12312312321321 123123123123' );
	expect( parseChars( '1"$!%$&/)=(=?^^Ç¨¨_:;' ) ).toEqual( '1' );
	expect( parseChars( ',.-¨¨*^^?=)(/&%$·"!ª12' ) ).toEqual( ',.-12' );
	expect( parseChars( '1-2-3-!"·$%&4-5-6$,.-' ) ).toEqual( '1-2-3-4-5-6,.-' );
} );

test( 'extractParts', () => {
	expect( extractParts( '' ) ).toEqual( [] );
	expect( extractParts( '12' ) ).toEqual( [ 12 ] );
	expect( extractParts( '12 - 23' ) ).toEqual( [ 12, 23 ] );
	expect( extractParts( '12.23 - ' ) ).toEqual( [ 12.23 ] );
	expect( extractParts( '12.23 - 5,10' ) ).toEqual( [ 12.23, 5.1 ] );
	expect( extractParts( '12.23 - - - - - 5,10' ) ).toEqual( [ 12.23, 5.1 ] );
	expect( extractParts( '- - - - - 12.23 - 5,10' ) ).toEqual( [ 12.23, 5.1 ] );
	expect( extractParts( '......,,,,12.23 - 5,10' ) ).toEqual( [ 12.23, 5.1 ] );
	expect( extractParts( '12.2.....3 ,-. 5,10' ) ).toEqual( [ 12.2, 5.1 ] );
	expect( extractParts( '1-2-3-!"·$%&4-5-6$,.-' ) ).toEqual( [1,  2] );
	expect( extractParts( '12.23 ,-. ----5,,,,,,10' ) ).toEqual( [ 12.23, 5 ] );
});

test( 'parser', () => {
	expect( parser( '' ) ).toEqual( '' );
	expect( parser( 'cupidatat occaecat' ) ).toEqual( '' );
	expect( parser( 'cupidatat 12 occaecat - 1,2' ) ).toEqual( '1.2 - 12' );
	expect( parser( '1,2 cupidatat 12 occaecat' ) ).toEqual( '1.2' );
	expect( parser( '1-1-1-1-1-1' ) ).toEqual( '1 - 1' );
	expect( parser( '......,,,,12.23 - 5,10' ) ).toEqual( '5.1 - 12.23' );
	expect( parser( '2.2.....3 ,-. 2,10' ) ).toEqual( '2.1 - 2.2' );
	expect( parser( '12.23 ,-. ----5,,,,,,10' ) ).toEqual( '5 - 12.23' );
	expect( parser( '1-2-3-!"·$%&4-5-6$,.-' ) ).toEqual( '1 - 2' );
	expect( parser( ',.-¨¨*^^?=)(/&%$·"!ª12' ) ).toEqual( '12' );
} );