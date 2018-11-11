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
import AttendeesActionButton from './template';
import { selectors } from '@moderntribe/tickets/data/blocks/ticket';
import { withStore } from '@moderntribe/common/hoc';
import { adminUrl } from '@moderntribe/common/src/modules/utils/globals';

const mapStateToProps = () => {
	const adminURL = adminUrl();
	const postType = select( 'core/editor' ).getCurrentPostType();
	const postId = select( 'core/editor' ).getCurrentPostId();

	return {
		href: `${ adminURL }edit.php?post_type=${ postType }&page=tickets-attendees&event_id=${ postId }`,
		hasProviders: selectors.hasTicketProviders(),
	};
}

export default compose(
	withStore(),
	connect( mapStateToProps ),
)( AttendeesActionButton );

