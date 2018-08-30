/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal Dependencies
 */
import { constants } from '@moderntribe/common/data/plugins';
import { PluginBlockHooks } from '@moderntribe/common/components';

const PLUGIN_TEMPLATES = {
	[ constants.EVENTS_PRO_PLUGIN ]: [
		[ 'tribe/event-pro-recurring-entry', {}, [
			[ 'tribe/event-pro-recurring', {}],
			[ 'tribe/event-pro-exception', {}],
		] ],
	],
};

const PluginDateTimeBlockHooks = () => {
	return (
		<PluginBlockHooks
			pluginTemplates={ PLUGIN_TEMPLATES }
			templateLock="all"
		/>
	);
};

PluginDateTimeBlockHooks.propTypes = {};

export default PluginDateTimeBlockHooks;
