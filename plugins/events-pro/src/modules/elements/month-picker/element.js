/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import MonthTag from './month-tag/element';
import { Button, Select } from '@moderntribe/common/elements';
import { options } from '@moderntribe/events-pro/data/blocks/recurring';

class MonthPicker extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		months: PropTypes.arrayOf(
			PropTypes.oneOf( options.MONTHS_OF_THE_YEAR_OPTIONS )
		),
		onMonthClick: PropTypes.func,
	};

	constructor( props ) {
		super( props );
		this.state = {
			isSelecting: false
		};
	}

	onAddClick = () => this.setState( { isSelecting: true } );

	onSelectBlur = () => this.setState( { isSelecting: false } );

	getSelect = () => (
		this.state.isSelecting
			? (
				<Select
					autoFocus={ true }
					backspaceRemovesValue={ false }
					isClearable={ false }
					isMulti
					onBlur={ this.onSelectBlur }
					value={ this.props.months }
					options={ options.MONTHS_OF_THE_YEAR_OPTIONS }
				/>
			)
			: (
				<Button
					className="tribe-editor__month-picker__add"
					onClick={ this.onAddClick }
				>
					<span className="tribe-editor__month-picker__add-icon">+</span>
					{ __( 'Add', 'events-gutenberg' ) }
				</Button>
			)
	);

	render() {
		const { className, months, onMonthClick } = this.props;

		return (
			<div className={ classNames( 'tribe-editor__month-picker', className ) }>
				{ months.map( ( month ) => (
					<MonthTag
						key={ month.value }
						className="tribe-editor__month-picker__month-tag"
						onClick={ onMonthClick }
					>
						{ month.tag }
					</MonthTag>
				) ) }
				{ this.getSelect() }
			</div>
		);
	}
};

export default MonthPicker;
