/**
 * External dependencies
 */
import { connect } from 'react-redux';
import { compose } from 'redux';

/**
 * Internal dependencies
 */
import InMonth from './template';
import { constants } from '@moderntribe/events-pro/data/blocks';
import {
	actions as recurringActions,
	constants as recurringConstants,
	options as recurringOptions,
	selectors as recurringSelectors,
} from '@moderntribe/events-pro/data/blocks/recurring';
import {
	actions as exceptionActions,
	selectors as exceptionSelectors,
} from '@moderntribe/events-pro/data/blocks/exception';
import { withStore } from '@moderntribe/common/hoc';

const { KEY_MONTH } = constants;
const { MONTHS_OF_THE_YEAR_OPTIONS } = recurringOptions;
const {
	MONTHS_OF_THE_YEAR_MAPPING_TO_STATE,
	MONTHS_OF_THE_YEAR_MAPPING_FROM_STATE,
} = recurringConstants;

const mapStateToProps = ( state, ownProps ) => {
	const selectors = ownProps.blockType === RECURRING
		? recurringSelectors
		: exceptionSelectors;
	const monthsArr = selectors.getMonth( state, ownProps );
	const months = monthsArr.forEach( ( monthNum ) => {
		const month = MONTHS_OF_THE_YEAR_MAPPING_FROM_STATE[ monthNum ];
		return find( MONTHS_OF_THE_YEAR_OPTIONS, { value: month } );
	} );

	return {
		monthsArr,
		months,
	};
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
	const edit = ownProps.blockType === RECURRING
		? recurringActions.editRule
		: exceptionActions.editException;

	return {
		edit: ( index, payload ) => dispatch( edit( index, payload ) ),
	};
};

const mergeProps = ( stateProps, dispatchProps, ownProps ) => {
	const { monthsArr, ...restStateProps } = stateProps;
	const { edit } = dispatchProps;

	return {
		...ownProps,
		...restStateProps,
		onMonthClick: ( month ) => () => {
			const mappedMonth = MONTHS_OF_THE_YEAR_MAPPING_TO_STATE[ month ];
			const newMonths = monthsArr.filter( ( monthNum ) => monthNum !== mappedMonth );

			edit( ownProps.index, { [ KEY_MONTH ]: newMonths } );
		},
		onSelectChange: ( selectedOption ) => {
			const mappedMonth = MONTHS_OF_THE_YEAR_MAPPING_TO_STATE[ selectedOption.value ];
			const newMonths = [ ...monthsArr, mappedMonth ].sort( ( a, b ) => a - b );

			edit( ownProps.index, { [ KEY_MONTH ]: newMonths } );
		},
	}
};

export default compose(
	withStore(),
	connect( mapStateToProps, mapDispatchToProps, mergeProps ),
)( InMonth );
