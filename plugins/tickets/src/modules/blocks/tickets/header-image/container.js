/**
 * External dependencies
 */
import { connect } from 'react-redux';
import { compose } from 'redux';

/**
 * Internal dependencies
 */
import Template from './template';
import { actions, selectors } from '@moderntribe/tickets/data/blocks/ticket';
import { withStore } from '@moderntribe/common/hoc';


const mapStateToProps = ( state ) => ( {
	image: {
		id: selectors.getTicketsHeaderImageId( state ),
		alt: selectors.getTicketsHeaderImageAlt( state ),
		src: selectors.getTicketsHeaderImageSrc( state ),
	},
	isSettingsLoading: selectors.getTicketsIsSettingsLoading( state ),
} );

const mapDispatchToProps = ( dispatch ) => ( {
	/**
	 * @todo: fix this later
	 */
	/**
	 * Full payload from gutenberg media upload is not used,
	 * only id, alt, and medium src are used for this specific case.
	 */
	onSelect( image ) {
		dispatch( actions.setTicketsHeader( image ) );
	},
	onRemove() {
		dispatch( actions.setTicketsHeader( null ) );
	},
} );

export default compose(
	withStore(),
	connect( mapStateToProps, mapDispatchToProps ),
)( Template );
