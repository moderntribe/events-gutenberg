/**
 * External Dependencies
 */
import { put, call, all, select, takeEvery } from 'redux-saga/effects';

/**
 * Internal dependencies
 */
import * as types from './types';
import * as actions from './actions';
import { getStart, getEnd } from '@moderntribe/events/data/blocks/datetime/selectors';
import { toMoment, toDate, toTime24Hr } from '@moderntribe/common/utils/moment';

export function* setRSVPDetails( action ) {
	const {
		title,
		description,
		capacity,
		notGoingResponses,
		startDate,
		startDateObj,
		startTime,
		endDate,
		endDateObj,
		endTime,
	} = action.payload;
	yield all( [
		put( actions.setRSVPTitle( title ) ),
		put( actions.setRSVPDescription( description ) ),
		put( actions.setRSVPCapacity( capacity ) ),
		put( actions.setRSVPNotGoingResponses( notGoingResponses ) ),
		put( actions.setRSVPStartDate( startDate ) ),
		put( actions.setRSVPStartDateObj( startDateObj ) ),
		put( actions.setRSVPStartTime( startTime ) ),
		put( actions.setRSVPEndDate( endDate ) ),
		put( actions.setRSVPEndDateObj( endDateObj ) ),
		put( actions.setRSVPEndTime( endTime ) ),
	] );
}

export function* setRSVPTempDetails( action ) {
	const {
		tempTitle,
		tempDescription,
		tempCapacity,
		tempNotGoingResponses,
		tempStartDate,
		tempStartDateObj,
		tempStartTime,
		tempEndDate,
		tempEndDateObj,
		tempEndTime,
	} = action.payload;
	yield all( [
		put( actions.setRSVPTempTitle( tempTitle ) ),
		put( actions.setRSVPTempDescription( tempDescription ) ),
		put( actions.setRSVPTempCapacity( tempCapacity ) ),
		put( actions.setRSVPTempNotGoingResponses( tempNotGoingResponses ) ),
		put( actions.setRSVPTempStartDate( tempStartDate ) ),
		put( actions.setRSVPTempStartDateObj( tempStartDateObj ) ),
		put( actions.setRSVPTempStartTime( tempStartTime ) ),
		put( actions.setRSVPTempEndDate( tempEndDate ) ),
		put( actions.setRSVPTempEndDateObj( tempEndDateObj ) ),
		put( actions.setRSVPTempEndTime( tempEndTime ) ),
	] );
}

export function* initializeRSVP() {
	const start = yield select( getStart );
	const end = yield select( getEnd );

	const startMoment = yield call( toMoment, start );
	const endMoment = yield call( toMoment, end );

	const startDate = yield call( toDate, startMoment );
	const endDate = yield call( toDate, endMoment );

	const startTime = yield call( toTime24Hr, startMoment );
	const endTime = yield call( toTime24Hr, endMoment );

	const startDateObj = new Date( startDate );
	const endDateObj = new Date( endDate );

	yield all( [
		put( actions.setRSVPTempStartDate( startDate ) ),
		put( actions.setRSVPTempStartDateObj( startDateObj ) ),
		put( actions.setRSVPTempStartTime( startTime ) ),
		put( actions.setRSVPTempEndDate( endDate ) ),
		put( actions.setRSVPTempEndDateObj( endDateObj ) ),
		put( actions.setRSVPTempEndTime( endTime ) ),
	] );
}

export default function* watchers() {
	yield takeEvery( types.SET_RSVP_DETAILS, setRSVPDetails );
	yield takeEvery( types.SET_RSVP_TEMP_DETAILS, setRSVPTempDetails );
	yield takeEvery( types.INITIALIZE_RSVP, initializeRSVP );
}
