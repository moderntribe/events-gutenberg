<?php
/**
 * This template renders a Single Ticket availability
 *
 * @version TBD
 *
 */

$ticket    = $this->get( 'ticket' );
$available = -1 === $ticket->available() ? esc_html__( 'Unlimited', 'events-gutenberg' ) : $ticket->available();
?>
<div
	class="tribe-block__tickets__item__extra__available"
>
	<?php if ( -1 === $ticket->available() ) : ?>
		<?php $this->template( 'blocks/tickets/extra-available-unlimited', array( 'ticket' => $ticket, 'key' => $key ) ); ?>
	<?php else: ?>
		<?php $this->template( 'blocks/tickets/extra-available-quantity', array( 'ticket' => $ticket, 'key' => $key ) ); ?>
	<?php endif; ?>
</div>