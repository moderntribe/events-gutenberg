<?php
/**
 * This template renders the registration/purchase attendee fields
 *
 * @version TBD
 *
 */
?>
<div
	class="tribe-block__tickets__item__attendee__fields"
>
	<?php foreach ( $tickets as $key => $ticket ) : ?>
		<?php $this->template( 'blocks/tickets/registration/attendee/fields', array( 'ticket' => $ticket, 'key' => $key ) ); ?>
	<?php endforeach; ?>
</div>

