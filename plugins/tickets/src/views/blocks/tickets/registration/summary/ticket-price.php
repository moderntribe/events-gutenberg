<?php
/**
 * This template renders the summary ticket price
 *
 * @version TBD
 *
 */
?>
<div class="tribe-block__tickets__registration__tickets__item__price">
	<?php echo $ticket->get_provider()->get_price_html( $ticket->ID ); ?>
</div>