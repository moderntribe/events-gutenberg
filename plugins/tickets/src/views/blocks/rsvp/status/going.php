<?php
/**
 * This template renders the RSVP ticket "Going" status
 *
 * @version 0.3.0-alpha
 *
 */
?>
<span>
	<button class="tribe-block__rsvp__status-button tribe-block__rsvp__status-button--going">
		<?php $this->template( 'blocks/rsvp/status/going-icon' ); ?>
		<span><?php esc_html_e( 'Going', 'events-gutenberg' ); ?></span>
	</button>
</span>