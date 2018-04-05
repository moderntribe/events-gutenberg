/**
 * External dependencies
 */
import moment from 'moment';
import { union, without, isEmpty, equals } from 'lodash';
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { select } from '@wordpress/data'
import { __ } from '@wordpress/i18n';
import { Component, compose } from '@wordpress/element';

import {
	Dropdown,
	IconButton,
	Dashicon,
	ToggleControl,
	TextControl,
	PanelBody,
} from '@wordpress/components';

import {
	RichText,
	PlainText,
	InspectorControls,
} from '@wordpress/blocks'

/**
 * Internal dependencies
 */
import {
	TermsList,
	OrganizerForm,
	DatePicker,
	TimePicker,
	MetaGroup,
} from 'elements'

import { default as EventOrganizers } from './organizers'
import { getSetting } from 'editor/settings'

/**
 * Module Code
 */
const WPDateSettings = window.tribe_date_settings;

class EventDetails extends Component {
	constructor() {
		super( ...arguments );
	}

	changeTime( current, item ) {
		let currentDate = moment( current, 'YYYY-MM-DD HH:mm:ss' )

		// On invalid date we reset to today
		if ( ! currentDate.isValid() ) {
			currentDate = moment()
		}

		const nextDatetime = currentDate.startOf( 'day' ).add( item.value, 'seconds' )
		return nextDatetime.format( 'YYYY-MM-DD HH:mm:ss' )
	}

	render() {
		const {
			attributes,
			setAttributes,
			focus,
			setFocus,
			isSelected
		} = this.props;

		let currencyPosition = '1' == getSetting( 'reverseCurrencyPosition', 0 ) ? 'suffix' : 'prefix';

		// If we have it saved we replace it
		if ( attributes.eventCurrencyPosition ) {
			currencyPosition = attributes.eventCurrencyPosition;
		}

		let eventCurrencySymbol = getSetting( 'defaultCurrencySymbol', __( '$', 'the-events-calendar' ) );
		if ( attributes.eventCurrencySymbol ) {
			eventCurrencySymbol = attributes.eventCurrencySymbol;
		}

		const content = [
			<div key="event-details-box" className="tribe-editor-block tribe-editor-event__details">
				<MetaGroup groupKey='event-details'>
					<RichText
						tagName="h3"
						className="tribe-events-single-section-title"
						value={ attributes.detailsTitle }
						onChange={ ( nextContent ) => setAttributes( { detailsTitle: nextContent } ) }
						focus={ focus && 'detailsTitle' === focus.editable ? focus : undefined }
						onFocus={ ( focusValue ) => setFocus( { editable: 'detailsTitle', ...focusValue } ) }
						placeholder={ __( 'Details', 'the-events-calendar' ) }
						formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
					/>

					<div>
						<strong>{ __( 'Start: ', 'the-events-calendar' ) }</strong><br />
						<DatePicker
							changeDatetime={ ( date ) => {
								setAttributes( { startDate: date } )
							} }
							datetime={ attributes.startDate }
						/>
						{ ! attributes.allDay &&
							<React.Fragment>
								<span>{ getSetting( 'dateTimeSeparator', __( ' @ ', 'the-events-calendar' ) ) }</span>
								<TimePicker
									onSelectItem={ ( date, startAllDay = false, endAllDay = false ) => {
										if ( 'all-day' === date ) {
											setAttributes( {
												allDay: true,
												startDate: startAllDay,
												endDate: endAllDay,
											} )
										} else {
											setAttributes( { startDate: date } )
										}
									} }
									current={ attributes.startDate }
									timeFormat={ WPDateSettings.formats.time }
								/>
							</React.Fragment>
						}
					</div>

					<div>
						<strong>{ __( 'End: ', 'the-events-calendar' ) }</strong><br />
						<DatePicker
							changeDatetime={ ( date ) => {
								setAttributes( { endDate: date } )
							} }
							datetime={ attributes.endDate }
						/>
						{ ! attributes.allDay &&
							<React.Fragment>
								<span>{ getSetting( 'dateTimeSeparator', __( ' @ ', 'the-events-calendar' ) ) }</span>
								<TimePicker
									onSelectItem={ ( date, startAllDay = false, endAllDay = false ) => {
										if ( 'all-day' === date ) {
											setAttributes( {
												allDay: true,
												startDate: startAllDay,
												endDate: endAllDay,
											} )
										} else {
											setAttributes( { endDate: date } )
										}
									} }
									current={ attributes.startDate }
									timeFormat={ WPDateSettings.formats.time }
								/>
							</React.Fragment>
						}
					</div>

					<div>
						<strong>{ __( 'Website: ', 'the-events-calendar' ) }</strong><br />
						<PlainText
							id="tribe-event-url"
							value={ attributes.eventUrl }
							placeholder={ __( 'Enter url', 'the-events-calendar' ) }
							onChange={ ( nextContent ) => setAttributes( { eventUrl: nextContent } ) }
						/>
					</div>

					<div className='tribe-editor__event-cost'>
						<strong>{ __( 'Price: ', 'the-events-calendar' ) }</strong><br />
						{ 'prefix' === currencyPosition &&
							<span>{ eventCurrencySymbol }</span>
						}
						<PlainText
							className={ classNames( 'tribe-editor__event-cost-value', `tribe-editor-cost-symbol-position-${ currencyPosition }` ) }
							value={ attributes.eventCost }
							placeholder={ __( 'Enter price', 'the-events-calendar' ) }
							onChange={ ( nextContent ) => setAttributes( { eventCost: nextContent } ) }
						/>
						{ 'suffix' === currencyPosition &&
							<span>{ eventCurrencySymbol }</span>
						}
					</div>

					<TermsList
						slug="tribe_events_cat"
						label={ __( 'Event Category:', 'the-events-calendar' ) }
					/>

					<TermsList
						slug="tags"
						label={ __( 'Event Tags:', 'the-events-calendar' ) }
					/>
				</MetaGroup>
				<MetaGroup groupKey='organizer'>
					<RichText
						tagName="h3"
						className="tribe-events-single-section-title"
						value={ attributes.organizerTitle }
						onChange={ ( nextContent ) => setAttributes( { organizerTitle: nextContent } ) }
						focus={ focus && 'organizerTitle' === focus.editable ? focus : undefined }
						onFocus={ ( focusValue ) => setFocus( { editable: 'organizerTitle', ...focusValue } ) }
						placeholder={ __( 'Organizer', 'the-events-calendar' ) }
						formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
					/>

					<EventOrganizers
						focus={ focus }
						addOrganizer={ nextOrganizer => setAttributes( { eventOrganizers: union( attributes.eventOrganizers, [ nextOrganizer.id ] ) } ) }
						removeOrganizer={ organizer => {
							let organizers = without( attributes.eventOrganizers, organizer.id )

							// If none are there we remove existing
							if ( isEmpty( organizers ) ) {
								organizers = [ 0 ]
							}
							setAttributes( { eventOrganizers: organizers } )
						} }
					/>
				</MetaGroup>
			</div>,
			isSelected && (
				<InspectorControls key="inspector">
					<PanelBody title={ __( 'Date Time Settings', 'the-events-calendar' ) }>
						<ToggleControl
							label={ __( 'Is All Day Event', 'the-events-calendar' ) }
							checked={ attributes.allDay }
							onChange={ ( value ) => setAttributes( { allDay: value } ) }
						/>
					</PanelBody>
					<PanelBody title={ __( 'Price Settings', 'the-events-calendar' ) }>
						<ToggleControl
							label={ __( 'Show symbol before', 'the-events-calendar' ) }
							checked={ 'prefix' === currencyPosition ? true : false  }
							onChange={ ( value ) => setAttributes( { eventCurrencyPosition: value ? 'prefix' : 'suffix' } ) }
						/>
						<TextControl
							label={ __( ' Currency Symbol', 'the-events-calendar' ) }
							value={ equals( attributes.eventCurrencySymbol, eventCurrencySymbol ) ? '' : attributes.eventCurrencySymbol }
							placeholder={ __( 'E.g.: $', 'the-events-calendar' ) }
							onChange={ ( value ) => setAttributes( { eventCurrencySymbol: value } ) }
						/>
					</PanelBody>
				</InspectorControls>
			)
		]

		return content
	}
}

export default EventDetails;
