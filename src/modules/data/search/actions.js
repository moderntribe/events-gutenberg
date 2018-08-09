/**
 * Internal dependencies
 */
import * as types from './types';

export const addBlock = ( id ) => ( {
	type: types.ADD_BLOCK,
	payload: {
		id,
	},
} );

export const setTerm = ( id, term ) => ( {
	type: types.SET_TERM,
	payload: {
		id,
		term,
	},
} );

export const setPostType = ( id, postType ) => ( {
	type: types.SET_POST_TYPE,
	payload: {
		id,
		postType,
	},
} );

export const setResults = ( id, results ) => ( {
	type: types.SET_RESULTS,
	payload: {
		id,
		results,
	},
} );

export const addResults = ( id, results ) => ( {
	type: types.ADD_RESULTS,
	payload: {
		id,
		results,
	},
} );

export const setTotalPages = ( id, totalPages ) => ( {
	type: types.SET_TOTAL_PAGES,
	payload: {
		id,
		totalPages,
	},
} );

export const setPage = ( id, page ) => ( {
	type: types.SET_PAGE,
	payload: {
		id,
		page,
	},
} );

export const enableIsLoading = ( id ) => ( {
	type: types.SET_IS_LOADING,
	payload: {
		id,
		isLoading: true,
	},
} );

export const disableIsLoading = ( id ) => ( {
	type: types.SET_IS_LOADING,
	payload: {
		id,
		isLoading: false,
	},
} );

export const clearBlock = ( id ) => ( {
	type: types.CLEAR_BLOCK,
	payload: {
		id,
	},
} );
