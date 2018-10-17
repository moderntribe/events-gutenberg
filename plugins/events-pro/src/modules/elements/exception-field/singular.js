/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import {
	OnDatePicker,
	RecurrenceTypePicker,
} from '@moderntribe/events-pro/elements';

const SingularField = () => {
	return (
		<Fragment>
			<RecurrenceTypePicker />
			<OnDatePicker />
		</Fragment>
	);
};

SingularField.propTypes = {};

export default SingularField;
