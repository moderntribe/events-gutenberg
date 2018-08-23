/**
 * External dependencies
 */
import { connect } from 'react-redux';
import { compose } from 'redux';

/**
 * Internal dependencies
 */
import { withStore } from '@moderntribe/common/hoc';
import EventRecurringAdd from './template';

/**
 * Module Code
 */

export default compose(
	withStore(),
	connect()
)( EventRecurringAdd );
