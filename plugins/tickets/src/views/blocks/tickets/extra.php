<?php
/**
 * This template renders a Single Ticket extra content
 * currently composed by Extra Price and Avaiable
 *
 * @version 0.3.0-alpha
 *
 */

$ticket = $this->get( 'ticket' );

$context = array(
	'ticket' => $ticket,
	'key' => $this->get( 'key' ),
);
?>
<div
	class="tribe-block__tickets__item__extra"
>
	<?php $this->template( 'blocks/tickets/extra-price', $context ); ?>
	<?php $this->template( 'blocks/tickets/extra-available', $context ); ?>
</div>
