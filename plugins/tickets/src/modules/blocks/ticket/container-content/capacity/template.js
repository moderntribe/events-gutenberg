/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { includes } from 'lodash';
import uniqid from 'uniqid';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Dashicon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { constants, options } from '@moderntribe/tickets/data/blocks/ticket';
import { LabeledItem, NumberInput, Select } from '@moderntribe/common/elements';
import { LabelWithTooltip } from '@moderntribe/tickets/elements';
import { ReactSelectOption } from '@moderntribe/common/data/plugins/proptypes'
import './style.pcss';

const {
	INDEPENDENT,
	SHARED,
	TICKET_TYPES,
} = constants;
const { CAPACITY_TYPE_OPTIONS } = options;

// Custom input for this type of form
const LabeledNumberInput = ( {
	className,
	id,
	label,
	...props,
} ) => (
	<LabeledItem
		className={ classNames(
			'tribe-editor__labeled-number-input',
			className,
		) }
		forId={ id }
		label={ label }
		isLabel={ true }
	>
		<NumberInput { ...props } />
	</LabeledItem>
);

LabeledNumberInput.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
};

class Capacity extends PureComponent {
	static propTypes = {
		isDisabled: PropTypes.bool,
		sharedCapacity: PropTypes.string,
		tempCapacity: PropTypes.string,
		tempCapacityType: PropTypes.string,
		tempCapacityTypeOption: ReactSelectOption,
		tempSharedCapacity: PropTypes.string,
		onTempCapacityChange: PropTypes.func,
		onTempCapacityTypeChange: PropTypes.func,
		onTempSharedCapacityChange: PropTypes.func,
	};

	constructor( props ) {
		super( props );
		this.ids = {
			select: uniqid( 'capacity-type-' ),
			capacity: uniqid( 'capacity-' ),
			sharedCapacity: uniqid( 'shared-capacity-' ),
		};
	}

	getInputs = () => {
		const {
			isDisabled,
			sharedCapacity,
			tempCapacityType,
			tempCapacity,
			tempSharedCapacity,
			onTempCapacityChange,
			onTempSharedCapacityChange,
		} = this.props;

		const inputs = [];

		// If capacity type is shared and does not have shared capacity
		if ( tempCapacityType === TICKET_TYPES[ SHARED ] && sharedCapacity === '' ) {
			inputs.push(
				<LabeledNumberInput
					className={ classNames(
						'tribe-editor__ticket__capacity-input-row',
						'tribe-editor__ticket__capacity-input-row--shared-capacity',
					) }
					id={ this.ids.sharedCapacity }
					label={ __( 'Set shared capacity:', 'events-gutenberg' ) }
					value={ tempSharedCapacity }
					onChange={ onTempSharedCapacityChange }
					disabled={ isDisabled }
					min={ 0 }
				/>
			);
		}

		// If capacity type is shared or independent
		if ( includes(
			[ TICKET_TYPES[ SHARED ], TICKET_TYPES[ INDEPENDENT ] ],
			tempCapacityType,
		) ) {
			const extraProps = {};

			if (
				tempCapacityType === TICKET_TYPES[ SHARED ]
					&& ( sharedCapacity || tempSharedCapacity )
			) {
				extraProps.max = sharedCapacity ? sharedCapacity : tempSharedCapacity;
			}

			extraProps.label = tempCapacityType === TICKET_TYPES[ SHARED ]
				? __( '(optional) Limit sales of this ticket to:', 'events-gutenberg' )
				: __( 'Number of tickets available', 'events-gutenberg' );

			inputs.push(
				<LabeledNumberInput
					className={ classNames(
						'tribe-editor__ticket__capacity-input-row',
						'tribe-editor__ticket__capacity-input-row--capacity',
					) }
					id={ this.ids.capacity }
					value={ tempCapacity }
					onChange={ onTempCapacityChange }
					disabled={ isDisabled }
					min={ 0 }
					{ ...extraProps }
				/>
			);
		}

		return inputs;
	};

	render() {
		const {
			isDisabled,
			tempCapacityTypeOption,
			onTempCapacityTypeChange,
		} = this.props;

		return (
			<div className={ classNames(
					'tribe-editor__ticket__capacity',
					'tribe-editor__ticket__content-row',
					'tribe-editor__ticket__content-row--capacity',
			) }>
				<LabelWithTooltip
					className="tribe-editor__ticket__capacity-label-with-tooltip"
					forId={ this.ids.select }
					isLabel={ true }
					label={ __( 'Ticket Capacity', 'events-gutenberg' ) }
					tooltipText={ __(
						'Ticket capacity will only be used by attendees buying this ticket type',
						'events-gutenberg',
					) }
					tooltipLabel={ <Dashicon className="tribe-editor__ticket__tooltip-label" icon="info-outline" /> }
				/>
				<div className="tribe-editor__ticket__capacity-form">
					<Select
						id={ this.ids.select }
						className="tribe-editor__ticket__capacity-type-select"
						backspaceRemovesValue={ false }
						value={ tempCapacityTypeOption }
						isSearchable={ false }
						isDisabled={ isDisabled }
						options={ CAPACITY_TYPE_OPTIONS }
						onChange={ onTempCapacityTypeChange }
					/>
					{ this.getInputs() }
				</div>
			</div>
		);
	}
}

export default Capacity;
