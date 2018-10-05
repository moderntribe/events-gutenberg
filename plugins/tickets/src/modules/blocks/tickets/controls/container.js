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
import { selectors, actions } from '@moderntribe/tickets/data/blocks/ticket';

const mapStateToProps = ( state ) => ( {
	providers: selectors.getProviders(),
	selectedProvider: selectors.getSelectedProvider( state ),
} );

const mapDispatchToProps = ( dispatch ) => ( {
	onProviderChange( event ) {
		const target = event.target;
		dispatch( actions.setProvider( target.name ) );
	},
} );

export default compose(
	withStore(),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
	withSaveData(),
)( Template );
