/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const DAILY = 'daily';
export const WEEKLY = 'weekly';
export const MONTHLY = 'monthly';
export const YEARLY = 'yearly';
export const SINGLE = 'single';

export const TYPES = [ DAILY, WEEKLY, MONTHLY, YEARLY, SINGLE ];

export const DAILY_BETWEEN = 'days_between';
export const WEEKLY_BETWEEN = 'weeks_between';
export const MONTHLY_BETWEEN = 'months_between';
export const YEARLY_BETWEEN = 'years_between';

export const BETWEEN_TYPES = [
	DAILY_BETWEEN,
	WEEKLY_BETWEEN,
	MONTHLY_BETWEEN,
	YEARLY_BETWEEN,
];

export const BETWEEN_KEY_MAPPING = {
	[ DAILY ]: DAILY_BETWEEN,
	[ WEEKLY ]: WEEKLY_BETWEEN,
	[ MONTHLY ]: MONTHLY_BETWEEN,
	[ YEARLY ]: YEARLY_BETWEEN,
};

export const NUMBER_FIELD = 'number';
export const DAY_FIELD = 'day';

//
// ─── WEEKLY RECURRING ───────────────────────────────────────────────────────────
//

export const WEEKLY_DAYS_FIELD = 'days';

//
// ─── MONTHLY RECURRING ──────────────────────────────────────────────────────────
//

export const DAYS_OF_MONTH_FIELD = NUMBER_FIELD;
export const MONTHLY_WEEK_FIELD = NUMBER_FIELD;
export const MONTHLY_DAY_OF_WEEK_FIELD = DAY_FIELD;
export const MONTHLY_REPEAT_BY_WEEKDAY = 'weekday';
export const MONTHLY_REPEAT_BY_DATE = 'date';

//
// ─── YEARLY RECURRING ───────────────────────────────────────────────────────────
//

export const YEARLY_DATE_FIELD = NUMBER_FIELD;
export const YEARLY_WEEK_FIELD = NUMBER_FIELD;
export const YEARLY_MONTH_OF_YEAR_FIELD = 'month';
export const YEARLY_DAY_OF_WEEK_FIELD = DAY_FIELD;
export const YEARLY_REPEAT_BY_WEEK = 'week';
export const YEARLY_REPEAT_BY_DATE = 'date';

//
// ─── AUTHORITY TYPES ────────────────────────────────────────────────────────────
//

export const ALL = 'all';
export const CURRENT = 'current';
export const CURRENT_THEN_ALL = 'current-then-all';
export const UPCOMING = 'upcoming';

//
// ─── SERIES END TYPES ───────────────────────────────────────────────────────────
//

export const ON = 'on';
export const AFTER = 'after';
export const NEVER = 'never';

export const SERIES_END_TYPES = [ ON, AFTER, NEVER ];

//
// ─── DAYS OF THE WEEK ───────────────────────────────────────────────────────────
//

export const SUNDAY = 'sunday';
export const MONDAY = 'monday';
export const TUESDAY = 'tuesday';
export const WEDNESDAY = 'wednesday';
export const THURSDAY = 'thursday';
export const FRIDAY = 'friday';
export const SATURDAY = 'saturday';

export const SUNDAY_LABEL = __( 'Sunday', 'events-gutenberg' );
export const MONDAY_LABEL = __( 'Monday', 'events-gutenberg' );
export const TUESDAY_LABEL = __( 'Tuesday', 'events-gutenberg' );
export const WEDNESDAY_LABEL = __( 'Wednesday', 'events-gutenberg' );
export const THURSDAY_LABEL = __( 'Thursday', 'events-gutenberg' );
export const FRIDAY_LABEL = __( 'Friday', 'events-gutenberg' );
export const SATURDAY_LABEL = __( 'Saturday', 'events-gutenberg' );

export const SUNDAY_ABBR = __( 'S', 'events-gutenberg' );
export const MONDAY_ABBR = __( 'M', 'events-gutenberg' );
export const TUESDAY_ABBR = __( 'T', 'events-gutenberg' );
export const WEDNESDAY_ABBR = __( 'W', 'events-gutenberg' );
export const THURSDAY_ABBR = __( 'T', 'events-gutenberg' );
export const FRIDAY_ABBR = __( 'F', 'events-gutenberg' );
export const SATURDAY_ABBR = __( 'S', 'events-gutenberg' );

//
// ─── DAYS OF THE MONTH ──────────────────────────────────────────────────────────
//

// returns an array from 1 - 31
export const DAYS_OF_THE_MONTH = Array( 31 ).fill().map( ( _, index ) => index + 1 );

//
// ─── WEEKS OF THE MONTH ─────────────────────────────────────────────────────────
//

export const FIRST = 'first';
export const SECOND = 'second';
export const THIRD = 'third';
export const FOURTH = 'fourth';
export const FIFTH = 'fifth';
export const LAST = 'last';

//
// ─── MONTHS OF THE YEAR ─────────────────────────────────────────────────────────
//

export const JANUARY = 'january';
export const FEBRUARY = 'february';
export const MARCH = 'march';
export const APRIL = 'april';
export const MAY = 'may';
export const JUNE = 'june';
export const JULY = 'july';
export const AUGUST = 'august';
export const SEPTEMBER = 'september';
export const OCTOBER = 'october';
export const NOVEMBER = 'november';
export const DECEMBER = 'december';

export const JANUARY_LABEL = __( 'January', 'events-gutenberg' );
export const FEBRUARY_LABEL = __( 'February', 'events-gutenberg' );
export const MARCH_LABEL = __( 'March', 'events-gutenberg' );
export const APRIL_LABEL = __( 'April', 'events-gutenberg' );
export const MAY_LABEL = __( 'May', 'events-gutenberg' );
export const JUNE_LABEL = __( 'June', 'events-gutenberg' );
export const JULY_LABEL = __( 'July', 'events-gutenberg' );
export const AUGUST_LABEL = __( 'August', 'events-gutenberg' );
export const SEPTEMBER_LABEL = __( 'September', 'events-gutenberg' );
export const OCTOBER_LABEL = __( 'October', 'events-gutenberg' );
export const NOVEMBER_LABEL = __( 'November', 'events-gutenberg' );
export const DECEMBER_LABEL = __( 'December', 'events-gutenberg' );

export const JANUARY_ABBR = __( 'Jan', 'events-gutenberg' );
export const FEBRUARY_ABBR = __( 'Feb', 'events-gutenberg' );
export const MARCH_ABBR = __( 'Mar', 'events-gutenberg' );
export const APRIL_ABBR = __( 'Apr', 'events-gutenberg' );
export const MAY_ABBR = __( 'May', 'events-gutenberg' );
export const JUNE_ABBR = __( 'Jun', 'events-gutenberg' );
export const JULY_ABBR = __( 'Jul', 'events-gutenberg' );
export const AUGUST_ABBR = __( 'Aug', 'events-gutenberg' );
export const SEPTEMBER_ABBR = __( 'Sep', 'events-gutenberg' );
export const OCTOBER_ABBR = __( 'Oct', 'events-gutenberg' );
export const NOVEMBER_ABBR = __( 'Nov', 'events-gutenberg' );
export const DECEMBER_ABBR = __( 'Dec', 'events-gutenberg' );