/**
 * External dependencies
 */
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

/**
 * Internal dependencies
 */
import EventVenue from './template';
import { toVenue } from 'elements';
import { withStore, withSaveData, withDetails, withForm } from 'editor/hoc';
import { actions, selectors } from 'data/blocks/venue';
import { VENUE } from 'editor/post-types';

const setVenue = ( dispatch ) => ( id ) => {
	const { setVenue, setShowMap, setShowMapLink } = actions;
	dispatch( setVenue( id ) );
	dispatch( setShowMap( true ) );
	dispatch( setShowMapLink( true ) );
};

const onFormComplete = ( dispatch, ownProps ) => ( body ) => {
	const { setDetails } = ownProps;
	const { id } = body;
	setDetails( id, body );
	setVenue( dispatch )( id );
};

const onFormSubmit = ( dispatch, ownProps ) => ( fields ) => (
	ownProps.sendForm( toVenue( fields ), onFormComplete( dispatch, ownProps ) )
);

const onItemSelect = ( dispatch ) => setVenue( dispatch );

const onCreateNew = ( ownProps ) => ( title ) => ownProps.createDraft( {
	title: {
		rendered: title,
	},
} );

// TODO: need to remove the use of "maybe" functions as they hold logic they
// ultimately should not.
const removeVenue = ( dispatch, ownProps ) => () => {
	const { volatile, maybeRemoveEntry, details } = ownProps;

	dispatch( actions.removeVenue() );
	if ( volatile ) {
		maybeRemoveEntry( details );
	}
};

const editVenue = ( ownProps ) => () => {
	const { details, editEntry } = ownProps;
	editEntry( details );
};

const mapStateToProps = ( state ) => ( {
	venue: selectors.getVenue( state ),
	showMapLink: selectors.getshowMapLink( state ),
	showMap: selectors.getshowMap( state ),
} );

const mapDispatchToProps = ( dispatch, ownProps ) => ( {
	...bindActionCreators( actions, dispatch ),
	onFormSubmit: onFormSubmit( dispatch, ownProps ),
	onItemSelect: onItemSelect( dispatch ),
	onCreateNew: onCreateNew( ownProps ),
	removeVenue: removeVenue( dispatch, ownProps ),
	editVenue: editVenue( ownProps ),
} );

export default compose(
	withStore( { postType: VENUE } ),
	connect( mapStateToProps ),
	withDetails( 'venue' ),
	withForm( ( props ) => props.name ),
	connect( null, mapDispatchToProps ),
	withSaveData(),
)( EventVenue );
