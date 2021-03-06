# The Events Calendar: Gutenberg Extension

## :warning: Important updates regarding the Gutenberg Extension

Since the release of **The Events Calendar 4.7**, we included compatibility with the upcoming release of WordPress 5.0 and the new Block Editor (codename "Gutenberg") directly in the plugins. 

**This means that we are no longer supporting the Gutenberg Extension**, and instead we are including the features that we've been working on _out of the box_ in our main plugins.

## How can you test the blocks functionality

When you activate the latest version of The Events Calendar with WordPress 5.0 or bigger, you will see a new Option on your Settings Page of Events, to activate Events on the Blocks Editor. You can find this option in **Events > Settings > Activate Block Editor for Events**. 

In the same order, we've added the tickets related blocks directly to [Event Tickets](https://wordpress.org/plugins/event-tickets/) and [Event Tickets Plus](https://theeventscalendar.com/product/wordpress-event-tickets-plus/), and finally all the Events PRO functionality to [Events Pro](https://theeventscalendar.com/product/wordpress-events-calendar-pro/).

## Supporting you on your journey to adoption

Gutenberg and the changes that come with it are a big deal. Our goal is to help support you on your journey to adoption as it makes sense for you and your situation. In that spirit, here’s where we’re at when it comes to our own work and compatibility:

* We’ve tested WordPress 4.9.8 + our plugins — good to go!
* We’ve done limited testing with WP Beta + our plugins (which includes our Gutenberg work)

## And please remember

You can also [disable Gutenberg and keep the Classic WordPress Editor](https://theeventscalendar.com/disable-gutenberg-keep-wordpress-classic-editor/) while you still get more familiar with it and test things out before you go live. Our block editor interface for creating events will be **disabled by default** and we have included a setting to activate it when you are ready.

## :link: Further reading

* [All Things Gutenberg](https://theeventscalendar.com/gutenberg-block-editor-news/)
* [Why Gutenberg is Worth the Effort](https://theeventscalendar.com/change-is-coming-gutenberg/)
* [A Comprehensive Guide to the New Block Editor](https://theeventscalendar.com/gutenberg-block-editor-free-ebook/)
* [Preparing for the New WordPress Block Editor](https://theeventscalendar.com/wordpress-gutenberg-block-editor-checklist/)
* [Gutenberg Ready: The Events Calendar 4.7, Event Tickets 4.9, and Premium Add-ons!](https://theeventscalendar.com/gutenberg-ready-the-events-calendar-4-7-event-tickets-4-9-and-premium-add-ons/)

---

### :calendar: Latest update: December 3rd, 2018

---

### Changelog

#### 0.3.6-alpha - TBD

* Feature - Add the opt-out option to users who submit tickets
* Fix - Add start date weekday to default weekday for weekly and monthly recurrence on rule addition
* Fix - Allow for earlier dates to be selected in date time block
* Fix - Set cursor for weekday tag to pointer

#### 0.3.5-alpha - 2018-11-12

* Feature - Recurrence compatibility for Events Pro into Date Time block
* Feature - eCommerce options for ticket block
* Feature - Add the opt-out option to users who submit an RSVP
* Tweak - Update icons for attendees and orders buttons on rsvp and tickets blocks
* Fix - Events and Events Pro front-end views are now looking for Theme customizations correctly
* Fix - Add conditional to human readable input saga to prevent infinite loop
* Fix - Missing variable that is used to parse the attributes of the block
* Fix - Show RSVP and Attendees blocks when coming from classic editor
* Fix - load order of tribe_js_config
* Fix - Conditionally show the RSVP block capacity label
* Fix - Change timezone label with timezone change
* Fix - Add element styles to asset loading
* Fix - Add filters for wpauto when using gutenberg blocks
* Fix - Remove Tickets block sidebar if only one provider is used
* Fix - Remove duplicates XHR requests and data calls
* Fix - Ticket blocks show proper sales and progress totals

#### 0.3.4-alpha - 2018-11-06

* Feature - Attendee additional fields properly working from Blocks Editor link
* Feature - Add HOC `withSelected` that is executed when a block is on focus and when the block losses focus
* Feature - Add dynamic additional blocks present on the Gutenberg Editor
* Tweak - Moving all CSS and JavaScript files into an `app` folder to allow better compatibility with Core Plugins
* Fix - RSVP blocks sets initial start and end date based on events
* Fix - Add `wp-editor` as dependency for scripts
* Fix - RSVP blocks sets initial start and end date based on event
* Fix - Ticket blocks sets initial start and end date based on event
* Fix - Allow ticket UI to show proper shared capacity state
* Fix - Remove `max-width` definition from Blocks Editor default for events page.

#### 0.3.3-alpha - 2018-10-25

* Feature - Event Attendees list block
* Tweak - Make sure users can select older Years on the Datetime block
* Fix - Style changes to make RSVP and Ticket settings compatible with Gutenberg 4.1

#### 0.3.2-alpha - 2018-10-18

* Fix - Custom Fields a.k.a. Meta is now saving properly for Events
* Fix - Adjust vertical alignment of the price section for the classic event date time block
* Fix - Make sure the ticket block uses the currency from the ticket provider
* Fix - Header image failing to load due to Incorrect variable type on RSVP block
* Fix - Venue form is now loading correctly on the Venue block

#### 0.3.1-alpha - 2018-10-12

* Fix - Make sure Classic Editor migration treats correctly Events with Tickets
* Fix - Error when multi day toggle component was not functional
* Fix - Prevent reset of times when set for an event from time pickers
* Fix - Sync UI of datetime block and human readable input so any changes on any is reflected on the other
* Fix - Make sure `meta` types matches before send into the request for `Tickets` block
* Fix - Load Going an Not Going values on the RSVP block
* Fix - Render "Not Going" `<button>` on RSVP block conditionally
* Fix - Make sure that the event venue selection works

#### 0.3.0-alpha - 2018-10-05

* Feature - RSVP block
* Feature - Tickets block
* Feature - Register ticket block to make it available in the block list
* Feature - Register PHP files to use tickets templates
* Feature - Add `store` for tickets plugins
* Feature - Add Tickets inside of the `plugins/` directory
* Feature - Add button component to common elements
* Feature - Add action dashboard to tickets elements
* Feature - Create `Available` component
* Feature - Add TribePropTypes functions to check custom time format
* Feature - Add time to seconds and ms and vice versa utility
* Feature - Create `<HeaderImage>` component to upload / select an image from the media library
* Feature - Add `CapacityTable` component to render the capacity of the tickets
* Feature - Connect `Tickets` block with `store` to manage state of component
* Feature - Add Events Calendar PRO integration and make the editor take de default values from the Settings
* Tweak - Move TEC icon into a `common` to make it available regardless of TEC
* Tweak - Move compatibility class into `/tickets` plugin
* Tweak - Create an icons module for the plugins and shared one on common to create a set of icons
* Tweak - Move most utilities from events plugin to common plugin
* Tweak - Move time picker element from events plugin to common plugin
* Tweak - Adjust time picker element to accept time string in hh:mm format rather than moments
* Fix - Make sure `meta` fields are returned into the `tribe_events` post type when option `disable_metabox_custom_fields` loads the first time

#### 0.2.9-alpha - 2018-09-21

* Fix - Prevent empty diff on new event creation, allowing Meta to be saved
* Fix - Prevent generation of empty classic blocks when migrating events to gutenberg with empty content
* Fix - Render the Google Map in the Event Venue Block.

#### 0.2.8-alpha - 2018-09-14

* Feature - Add Tickets inside of the `plugins/` directory
* Feature - Add Events Pro inside of the `plugins/` directory
* Feature - Each block now loads their CSS and JavaScript only when it is present in the post
* Tweak - Smaller internal changes to accommodate Gutenberg 3.8 code
* Fix - Properly load the frontend assets for the Blocks
* Fix - Accept responses between `200` and `299` HTTP codes as valid responses
* Fix - Prevent to set attributes when arrays have the same content
* Fix - Resolve problems with Infinite looping around Google Calendar on the Links Block
* Fix - Properly load Price block, avoiding breaking on new Events
* Fix - Floating block settings button from Gutenberg 3.8 on the correct place
* Fix - Migration from Classic Editor no longer duplicates Blocks

#### 0.2.7-alpha - 2018-08-30

* Feature - Add store registration in `common`
* Feature - Move `events` reducer into the `common` store
* Feature - Add `<TicketIcon />` component for the ticket
* Feature - Add `<DisabledTickets />` component when no tickets are active
* Tweak - Use event timezone as default value
* Tweak - Separate logic and presentation in event venue block
* Tweak - Move `request` mechanism into `common`
* Tweak - Make sure organizers are removed from classic editor when the organizer block is removed
* Tweak - Favor `fetch` instead of `window.wp.apiRequest` to make API calls
* Tweak - Move `globals` utils into `common` instead of being located in events
* Tweak - Move `__mocks__` into the root directory
* Tweak - Remove `withAPIData` by `getEntityRecords` on `TermsList` component
* Fix - Display timezone label when selection is a UTC offset
* Fix - Allow removal of organizers from classic block if the organizer block is removed
* Fix - Separate logic and presentation from date time block
* Feature - Add store registration in `common`
* Feature - Move `events` reducer into the `common` store

#### 0.2.6-alpha - 2018-08-10

* Tweak - Rename the "Event Tags" block and label to "Tags"
* Tweak - Change Event Website placeholder text to "Add Event Website"
* Tweak - Remove references to the deprecated `compose` function from `@wordpress/element`
* Feature - Add Edit Link button for Venue and Organizer block
* Feature - Add filter to customize the variables send to the FE `tribe_events_gutenberg_js_config`
* Feature - Add Human Readable input for date
* Feature - Time Zone is editable and can be used as label
* Fix - Separate logic and presentation from event links block
* Fix - Remove specificity and side effects from time picker element
* Fix - Make time picker element stateless, removing logic and allowing presentation via props
* Fix - Remove middlewares for date time block actions, move logic to thunks
* Fix - Separate logic and presentation from SearchOrCreate component
* Fix - Change all references of block id to clientId

#### 0.2.5-alpha - 2018-08-04

* Feature - Frontend view for date time block
* Tweak - Change event location to event venue
* Tweak - Add tests for utils functions
* Tweak - Add "Event Blocks" category to the editor
* Tweak - Normalize styles for the Event Options metabox
* Tweak - Display the currency symbol and position in the event price block preview
* Fix - Remove featured image from default blocks in new event
* Fix - Avoid crash when using `wp` cli tool, (thanks to Matt Fields @0x6d617474 for report this problem)
* Fix - Remove warning when `currencyPosition` is empty string

#### 0.2.4-alpha - 2018-07-12

* Fix - Styles for date time block
* Fix - Styles for price block
* Fix - Styles for map container and fix map error
* Fix - Issue on `datetime` block to select the date on Gutenberg 3.1
* Fix - Prevent to create multiples entries when using sync copies of blocks
* Fix - Problem when multiple sync copies were not initialized
* Fix - Use default timezone selected by the user on the admin instead of `UTC`
* Tweak - Consolidate multiple stores into a single store
* Tweak - Use native `redux` store implementation
* Tweak - Remove references to `withSelect` and `withDispatch` and replace with `connect`
* Tweak - Prevent errors when a new organizer block is created
* Tweak - `showMap` and `showMapLink` are enabled by default on Location block
* Tweak - Favor `<AutosizeInput>` instead of `<RichText>`
* Tweak - Implemented and added styles for the venue block FE view
* Tweak - Implemented and added styles for the organizer block FE view
* Tweak - Implemented and added styles for the price block FE view
* Tweak - Implemented and added styles for the website block FE view
* Tweak - Implemented and added styles for the links block FE view
* Feature - HOC `withDetails` to fetch details of a post type.
* Feature - HOC `withForm` to attach Form behaviors into a block.
* Feature - HOC `withStore` to inject the store property into a component
* Feature - `useOnce` properties from block to allow live sync copies of blocks
* Feature - Time for an event can be set on any range of minutes not just half hours.

#### 0.2.3-alpha - 2018-06-22

* Feature - Add filter `tec.datetime.defaultRange` to change the default number of days to use in a range
* Fix - Prevent render empty content on organizer block
* Fix - Issue with wrong translation domain
* Fix - Add `autosave` endpoint for other types like Organizers or Venues
* Fix - Issues with the layout of blocks to avoid hide controls
* Fix - Issue with deleting organizer block and reflecting on Classic Event Details
* Fix - Issue with deleting location block and retaining old location data
* Fix - Event link block styles and functionality
* Fix - Remove `multiday` to be set automatically in some situations
* Fix - Keep the dashboard open if the calendar is advanced several months ahead
* Fix - Render the selected month inside of the calendar instead of the current month
* Fix - Normalize styles on Form fields and Colors on Dashboard
* Fix - Standarize styles on Form fields and Colors on Dashboard
* Fix - Render Event Links Block accordingly to their attributes
* Tweak - Align edit button in Organizer and Venue block next to the title
* Tweak - Set event links as last on default load for new event
* Tweak - Fix Organizer and Venue block styles
* Tweak - Update Delete icon for Organizer and Venue block
* Tweak - Standardize the color of blue and dashboard background
* Tweak - Add custom icon for custom blocks
* Tweak - Enable selection of days on the past
* Tweak - Remove format controls from `<RichText>` components
* Tweak - Organize Store based on actions and selectors
* Tweak - Styles to match style guide
* Tweak - Event Website block now renders on the FE

#### 0.2.2-alpha - 2018-06-15

* Feature - Featured Image Block for Events
* Feature - Actual migration for Classic Editor Events into Blocks Editor
* Feature - Event Date Time can now move Years forward
* Feature - Event links now are saved as attributes
* Feature - When searching a venue or organizer you can always create the searched value
* Tweak - Favor the usage of HOC to sync / save data in details store
* Tweak - Remove prefixes from store to make it more clear
* Tweak - Removal of new volatile meta fields to store temp data
* Fix - issues with sync of data between components with the same data
* Fix - Event price and description are stored correctly

#### 0.2.1-alpha - 2018-06-01

* Feature - Event Organizer is now a standalone block
* Feature - Event Categories is now a standalone block
* Feature - Event Tags is now a standalone block
* Feature - Event Website is now a standalone block
* Feature - Event can set a unique separator for Date and Time instead of using a global value for all events.
* Tweak - Event Details is now renamed to Classic Event Details (final name)
* Tweak - Event Location (old venue) is now improved and has new interface
* Tweak - Deprecated Subtitle block in favor of Event Datetime block
* Tweak - Improved compatibility with the Classic Block users
* Fix - Fixing some CSS for all of the PlainText input fields on Event Details

#### 0.2.0-alpha - 2018-05-17

* Feature - Event Price has his own block
* Feature - Event Subtitle has a range selector with calendars to select multiple days
* Feature - Event Subtitle has the option to set the Multiday or All day values
* Feature - Event Details data has a Redux Store where the data is centralized
* Fix - Event Details fix issues when selecting the data from the dashboard using the Store
* Fix - Resolve a few warnings due to Gutenberg changes in the past few releases, using now `wp.editor` instead of `wp.blocks`

#### 0.1.9-alpha - 2018-05-03

* Feature - Add store implementation to load multiple pages of `venues` and `organizers`
* Feature - Add new `<Dashboard />` component
* Feature - Add time selection inside of the `<Dashboard />` component
* Feature - Add `MultiDay` checkbox
* Tweak - Update label render based on factors like same day or all day events
* Fix - Update all instances of domain into `events-gutenberg`

#### 0.1.8-alpha - 2018-04-12

* Tweak - Improved the modularization of our CSS files to allow better extensibility
* Tweak - Moved into using `events-gutenberg` domain
* Fix - Actually load the text domain into the correct place for the JavaScript

#### 0.1.7-alpha — 2018-04-10

* Tweak - Re-organized Module files to make Elements CSS more modularized and more performant
* Tweak - Countries and US states are available as `<select>` element on Venue creation.

#### 0.1.6-alpha &mdash; 2018-04-05

* Fix - Preventing Google Maps JavaScript API to re-render on block focus (performance)
* Tweak - Added field validation to Location and Organizer creation dropdown forms

#### 0.1.5-alpha &mdash; 2018-04-04

* Tweak - Add required Google JavaScript API into Location Block

#### 0.1.4-alpha &mdash; 2018-03-27

* Feature - Added the structure for All Day Events

#### 0.1.3-alpha &mdash; 2018-03-23

* Feature - Added a Timezone picker into Subtitle Block
* Tweak - Added filter `tribe_events_editor_default_template` to allow tweaking which default blocks will be used

#### 0.1.2-alpha &mdash; 2018-03-13

* Feature - Venue Block sidebar control for displaying Google Maps Link and Embed
* Feature - Event Details Block sidebar control for currency and currency symbol positon
* Tweak - Date and Time Picker split into two fields to improve User Experience
* Tweak - Time Picker now is no longer based on default Gutenberg Timepicker
* Tweak - Improved internal query of Tribe Settings
* Fix - Add existing Posts now orders by title instead of modified date `<SearchPosts>`

#### 0.1.1-alpha &mdash; 2018-03-08

* Feature - Events Single page will now respect configurations from Blocks Editor
* Feature - Create a Event Links block
* Tweak - Add capability checks for the meta fields
* Tweak - Add Cost field to Event Details block
* Tweak - Venue Block now has Website and Phone fields
* Fix - Use the Google Maps API key for Blocks Editor venue image
* Fix - Button to remove organizers functions properly
* Fix - Venue loading optimized to avoid having `eventVenue` showing on the public block props
* Fix - Makes sure we only load the plugin once Blocks Editor is fully loaded

#### 0.1.0-alpha &mdash; 2018-03-02

* *Note - Front-end still doesn't respect blocks from Gutenberg*
* Feature - Created Subtitle block
* Feature - Created Event Details and Organizer block
* Feature - Created Event Venue block
