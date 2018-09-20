/**
 * External dependencies
 */
import { noop } from 'lodash';

export const withAPIData = () => noop;
export const Spinner = () => "🏃‍♂️";
export const Dashicon = ( { className, icon } ) => <span className={ className }>{ icon }</span>;
export const Dropdown = () => <span>Dropdown</span>;
export const Tooltip = () => <span>Tooltip</span>;
