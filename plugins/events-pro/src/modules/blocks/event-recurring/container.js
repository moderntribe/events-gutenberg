/**
 * External dependencies
 */
import { connect } from 'react-redux';
import { compose } from 'redux';

/**
 * Internal dependencies
 */
import { withStore } from '@moderntribe/common/hoc';
import { selectors, actions } from '@moderntribe/events-pro/data/ui';
import EventRecurringBlock from './template';

/**
 * Module Code
 */

const mapStateToProps = state => ( {
	isRulePanelVisible: selectors.isRulePanelVisible( state ),
	isRulePanelExpanded: selectors.isRulePanelExpanded( state ),
} );

const mapDispatchToProps = dispatch => ( {
	toggleRulePanelVisibility: () => dispatch( actions.toggleRulePanelVisibility() ),
	toggleRulePanelExpand: () => dispatch( actions.toggleRulePanelExpand() ),
} );

const mergeProps = ( stateProps, dispatchProps, ownProps ) => ( {
	...stateProps,
	...dispatchProps,
	...ownProps,
	initialRulePanelClick: compose(
		dispatchProps.toggleRulePanelVisibility,
		dispatchProps.toggleRulePanelExpand,
	),
} );

export default compose(
	withStore(),
	connect( mapStateToProps, mapDispatchToProps, mergeProps )
)( EventRecurringBlock );
