/**
 * External dependencies
 */
import { connect } from 'react-redux';
import { compose } from 'redux';

/**
 * WordPress dependencies
 */
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import RSVPAttendeeRegistration from './template';
import { selectors } from '@moderntribe/tickets/data/blocks/rsvp';
import { withStore } from '@moderntribe/common/hoc';
import { config } from '@moderntribe/common/src/modules/utils/globals';

const getAttendeeRegistrationUrl = ( state ) => {
	const adminURL = config().admin_url || '';
	const postType = select( 'core/editor' ).getCurrentPostType();
	const rsvpId = selectors.getRSVPId( state );

	return `${ adminURL }edit.php?post_type=${ postType }&page=attendee-registration&ticket_id=${ rsvpId }`;
};

const getIsDisabled = ( state ) => (
	selectors.getRSVPIsLoading( state ) || selectors.getRSVPSettingsOpen( state )
);

const mapStateToProps = ( state ) => ( {
	attendeeRegistrationURL: getAttendeeRegistrationUrl( state ),
	isDisabled: getIsDisabled( state ),
} );

export default compose(
	withStore(),
	connect( mapStateToProps ),
)( RSVPAttendeeRegistration );
