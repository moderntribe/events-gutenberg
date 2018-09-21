/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import LabeledItem from '@moderntribe/common/elements/labeled-item/element';
import ModalButton from '@moderntribe/common/elements/modal-button/element';
import './style.pcss';

const LabelWithModal = ( {
	className,
	closeButtonLabel,
	label,
	modalButtonDisabled,
	modalButtonLabel,
	modalTitle,
	onClick,
	onClose,
	onCloseClick,
	onOpen,
} ) => (
	<LabeledItem
		className={ classNames( 'tribe-editor__label-with-modal', className ) }
		label={ label }
	>
		<ModalButton
			className="tribe-editor__label-with-modal__modal-button"
			closeLabel={ closeButtonLabel }
			disabled={ modalButtonDisabled }
			label={ modalButtonLabel }
			modalTitle={ modalTitle }
			onClick={ onClick }
			onClose={ onClose }
			onCloseClick={ onCloseClick }
			onOpen={ onOpen }
		/>
	</LabeledItem>
);

LabelWithModal.defaultProps = {
	onClick: noop,
	onClose: noop,
	onCloseClick: noop,
	onOpen: noop,
};

LabelWithModal.propTypes = {
	className: PropTypes.string,
	closeButtonLabel: PropTypes.string,
	label: PropTypes.node,
	modalButtonDisabled: PropTypes.bool,
	modalButtonLabel: PropTypes.string,
	modalTitle: PropTypes.string,
	onClick: PropTypes.func,
	onClose: PropTypes.func,
	onCloseClick: PropTypes.func,
	onOpen: PropTypes.func,
};

export default LabelWithModal;
