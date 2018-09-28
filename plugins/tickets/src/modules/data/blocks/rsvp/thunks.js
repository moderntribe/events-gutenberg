/**
 * External dependencies
 */
import moment from 'moment';

/**
 * Internal dependencies
 */
import { actions as requestActions } from '@moderntribe/common/store/middlewares/request';
import { toDateTime } from '@moderntribe/common/utils/moment';
import { toSeconds, TIME_FORMAT_HH_MM } from '@moderntribe/common/utils/time';
import * as utils from '@moderntribe/tickets/data/utils';

/**
 * @todo: until we can abstract out wpRequest() better, these should remain as a thunk
 */
const METHODS = {
	POST: 'POST',
	PUT: 'PUT',
};

const createOrUpdateRSVP = ( method ) => ( payload ) => ( dispatch ) => {
	const {
		title,
		description,
		capacity,
		notGoingResponses,
		startDateObj,
		startTime,
		endDateObj,
		endTime,
	} = payload;

	const startMoment = moment( startDateObj ).seconds(
		toSeconds( startTime, TIME_FORMAT_HH_MM )
	);
	const endMoment = moment( endDateObj ).seconds(
		toSeconds( endTime, TIME_FORMAT_HH_MM )
	);

	let path = `${ utils.TICKET_POST_TYPE }`;
	const body = {
		title,
		excerpt: description,
		meta: {
			[ utils.KEY_TICKET_CAPACITY ]: capacity,
			[ utils.KEY_TICKET_START_DATE ]: toDateTime( startMoment ),
			[ utils.KEY_TICKET_END_DATE ]: toDateTime( endMoment ),
			[ utils.KEY_TICKET_SHOW_NOT_GOING ]: notGoingResponses ? 'yes' : 'no',
		},
	};

	if ( method === METHODS.POST ) {
		body.status = 'publish';
		body.meta[ utils.KEY_RSVP_FOR_EVENT ] = `${ payload.postId }`;
		/* This is hardcoded value until we can sort out BE */
		body.meta[ utils.KEY_TICKET_SHOW_DESCRIPTION ] = 'yes';
		/* This is hardcoded value until we can sort out BE */
		body.meta[ utils.KEY_PRICE ] = '0';
	} else if ( method === METHODS.PUT ) {
		path += `/${ payload.id }`;
	}

	const options = {
		path,
		params: {
			method,
			body: JSON.stringify( body ),
		},
		actions: {
			start: () => {
				/* handle start here */
			},
			success: ( res ) => {
				/* handle success here */
			},
			error: ( err ) => {
				/* handle error here */
			},
		},
	};

	dispatch( requestActions.wpRequest( options ) );
};

export const createRSVP = createOrUpdateRSVP( METHODS.POST );

export const updateRSVP = createOrUpdateRSVP( METHODS.PUT );