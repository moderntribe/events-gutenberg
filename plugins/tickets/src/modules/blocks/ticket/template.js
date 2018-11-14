/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { Spinner } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.pcss';
import TicketContainer from './container/container';
import TicketDashboard from './dashboard/container';

class Ticket extends PureComponent {

	static propTypes = {
		blockId: PropTypes.string.isRequired,
		isDisabled: PropTypes.bool,
		isLoading: PropTypes.bool,
		isSelected: PropTypes.bool,
		onBlockUpdate: PropTypes.func,
		removeTicketBlock: PropTypes.func,
	};

	componentDidUpdate( prevProps ) {
		if ( prevProps.isSelected !== this.props.isSelected ) {
			this.props.onBlockUpdate( this.props.isSelected );
		}
	}

	componentWillUnmount() {
		this.props.removeTicketBlock();
	}

	render() {
		const { blockId, isDisabled, isLoading, isSelected } = this.props;

		return (
			<article className={ classNames(
				'tribe-editor__ticket',
				{ 'tribe-editor__ticket--disabled': isDisabled },
				{ 'tribe-editor__ticket--selected': isSelected },
			) }>
				<TicketContainer blockId={ blockId } isSelected={ isSelected } />
				<TicketDashboard blockId={ blockId } isSelected={ isSelected } />
				{ isLoading && <Spinner /> }
			</article>
		);
	}
}

export default Ticket;
