/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import RecurringForm from '@moderntribe/events-pro/elements/recurring-form/element';
import RecurringAddField from '@moderntribe/events-pro/elements/recurring-add-field/element';
import Panel from '@moderntribe/events-pro/elements/panel/element';

export default class EventRecurring extends PureComponent {
	static propTypes = {
		addField: PropTypes.func.isRequired,
		hasRules: PropTypes.bool.isRequired,
		initialRulePanelClick: PropTypes.func.isRequired,
		isRulePanelExpanded: PropTypes.bool.isRequired,
		isRulePanelVisible: PropTypes.bool.isRequired,
		removeRule: PropTypes.func.isRequired,
		rules: PropTypes.array.isRequired,
		rulesCount: PropTypes.number.isRequired,
		toggleRulePanelExpand: PropTypes.func.isRequired,
	}

	render() {
		return (
			this.props.isRulePanelVisible ||
			this.props.hasRules
				? (
					<Panel
						count={ this.props.rulesCount }
						onHeaderClick={ this.props.toggleRulePanelExpand }
						isExpanded={ this.props.isRulePanelExpanded }
						panelTitle={ __( 'Recurrence Rules', 'events-gutenberg' ) }
					>
						<RecurringForm
							rules={ this.props.rules }
							removeRule={ this.props.removeRule }
						/>
						<RecurringAddField onClick={ this.props.addField } noBorder />
					</Panel>
				)
				: <RecurringAddField onClick={ this.props.initialRulePanelClick } />

		);
	}
}
