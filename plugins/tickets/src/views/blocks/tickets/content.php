<?php
/**
 * This template renders a Single Ticket content
 * composed by Title and Description currently
 *
 * @version TBD
 *
 */

$ticket = $this->get( 'ticket' );

$context = array(
	'ticket' => $ticket,
	'key' => $this->get( 'key' ),
);
?>
<div
	class="tribe-block__tickets__item__content"
>
	<?php $this->template( 'blocks/tickets/content-title', $context ); ?>
	<?php $this->template( 'blocks/tickets/content-description', $context ); ?>
</div>
