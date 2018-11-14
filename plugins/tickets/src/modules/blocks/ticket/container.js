/**
 * External dependencies
 */
import { connect } from 'react-redux';
import { compose } from 'redux';

/**
 * Internal dependencies
 */
import Template from './template';

import { withSaveData, withStore } from '@moderntribe/common/src/modules/hoc';
import { actions, selectors } from '@moderntribe/tickets/data/blocks/ticket';

const mapStateToProps = ( state, ownProps ) => {
	const props = { blockId: ownProps.clientId };

	return {
		blockId: ownProps.clientId,
		isLoading: selectors.getTicketIsLoading( state, props ),
	};
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
	const { clientId } = ownProps;

	return {
		onBlockUpdate: ( isSelected ) => (
			dispatch( actions.setTicketIsSelected( clientId, isSelected ) )
		),
		removeTicketBlock: () => {
			dispatch( actions.removeTicketBlock( clientId ) );
			dispatch( actions.deleteTicket( clientId ) );
		},
		setInitialState: ( props ) => {
			dispatch( actions.registerTicketBlock( clientId ) );
			dispatch( actions.setTicketInitialState( props ) );
		},
	};
};

export default compose(
	withStore( { isolated: true } ),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
	withSaveData(),
)( Template );

