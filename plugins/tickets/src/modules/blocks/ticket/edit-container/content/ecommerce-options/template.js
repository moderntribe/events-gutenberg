/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { LabeledItem, Link } from '@moderntribe/common/elements';
import { constants } from '@moderntribe/tickets/data/blocks/ticket';
import './style.pcss';

const { EDD, WOO, PROVIDER_TYPES } = constants;

const getEditTicketLinkLabel = ( provider ) => {
	let label = '';

	if ( provider === EDD ) {
		label = __( 'Edit Ticket in Easy Digital Downloads', 'events-gutenberg' );
	} else if ( provider === WOO ) {
		label = __( 'Edit Ticket in WooCommerce', 'events-gutenberg' );
	}

	return label;
};

const EcommerceOptions = ( {
	editTicketLink,
	provider,
	reportLink,
	showEcommerceOptions,
}) => (
	showEcommerceOptions
		&& (
			<LabeledItem
				className="tribe-editor__ticket__ecommerce-options"
				label={ __( 'Ecommerce', 'events-gutenberg' ) }
			>
				<div className="tribe-editor__ticket__ecommerce-options-links">
					<Link
						className="tribe-editor__ticket__ecommerce-options-edit-ticket-link"
						href={ editTicketLink }
						target="_blank"
					>
						{ getEditTicketLinkLabel( provider ) }
					</Link>
					<Link
						className="tribe-editor__ticket__ecommerce-options-report-link"
						href={ reportLink }
						target="_blank"
					>
						{ __( 'View Sales Report', 'events-gutenberg' ) }
					</Link>
				</div>
			</LabeledItem>
		)
);

EcommerceOptions.propTypes = {
	editTicketLink: PropTypes.string,
	provider: PropTypes.oneOf( PROVIDER_TYPES ),
	reportLink: PropTypes.string,
	showEcommerceOptions: PropTypes.bool,
};

export default EcommerceOptions;
