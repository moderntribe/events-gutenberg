/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { Button, Image } from '@moderntribe/common/elements';
import { Close as CloseIcon } from '@moderntribe/common/icons';
import './style.pcss';

export const renderImageUploadButton = ( label ) => ( { open } ) => (
	<Button
		onClick={ open }
		className={ [ 'tribe-editor__button--sm', 'tribe-editor__image-upload__upload-button' ] }
	>
		{ label }
	</Button>
);

export const renderImage = ( image, onRemove ) => (
	<div className="tribe-editor__image-upload__image-wrapper">
		<Image
			src={ image.src }
			alt={ image.alt }
			className="tribe-editor__image-upload__image"
		/>
		<Button
			className="tribe-editor__image-upload__remove-button"
			onClick={ onRemove }
		>
			<CloseIcon />
			<span className="tribe-editor__image-upload__remove-button-text">
				{ __( 'remove', 'events-gutenberg' ) }
			</span>
		</Button>
	</div>
);

const ImageUpload = ( {
	buttonLabel,
	className,
	description,
	image,
	onRemove,
	onSelect,
	title,
} ) => {
	const hasImageClass = { 'tribe-editor__image-upload--has-image': image.id };

	return (
		<div className={ classNames(
			'tribe-editor__image-upload',
			hasImageClass,
			className,
		) }>
			{ title && <h3 className="tribe-editor__image-upload__title">{ title }</h3> }
			<div className="tribe-editor__image-upload__content">
				{ description && (
					<p className="tribe-editor__image-upload__description">{ description }</p>
				) }
				{
					image.id
						? renderImage( image, onRemove )
						: (
							<MediaUpload
								onSelect={ onSelect }
								type="image"
								render={ renderImageUploadButton( buttonLabel ) }
								value={ image.id }
							/>
						)
				}
			</div>
		</div>
	);
};

ImageUpload.propTypes = {
	buttonLabel: PropTypes.string,
	className: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.shape( {
		alt: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		src: PropTypes.string.isRequired,
	} ).isRequired,
	onRemove: PropTypes.func.isRequired,
	onSelect: PropTypes.func.isRequired,
	title: PropTypes.string,
};

ImageUpload.defaultProps = {
	onRemove: noop,
	onSelect: noop,
};

export default ImageUpload;
