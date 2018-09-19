/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import { Tooltip } from '@moderntribe/common/elements';
import './style.pcss';

const LabelWithTooltip = ( {
	className,
	label,
	tooltipLabel,
	tooltipPosition,
	tooltipText,
} ) => (
	<div className={ classNames(
		'tribe-editor__label-with-tooltip',
		className,
	) }>
		<span className="tribe-editor__label-with-tooltip__label">
			{ label }
		</span>
		<Tooltip
			label={ tooltipLabel }
			labelClassName="tribe-editor__label-with-tooltip__tooltip-label"
			position={ tooltipPosition }
			text={ tooltipText }
		/>
	</div>
);

LabelWithTooltip.defaultProps = {
	label: '',
};

LabelWithTooltip.propTypes = {
	className: PropTypes.string,
	label: PropTypes.node,
	tooltipLabel: PropTypes.node,
	tooltipPosition: PropTypes.oneOf( [
		'top left',
		'top center',
		'top right',
		'bottom left',
		'bottom center',
		'bottom right',
	] ),
	tooltipText: PropTypes.string,
};

export default LabelWithTooltip;