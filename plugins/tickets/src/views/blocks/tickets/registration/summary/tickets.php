<?php
/**
 * This template renders the summary tickets
 *
 * @version 0.3.0-alpha
 *
 */
?>
<div class="tribe-block__tickets__registration__tickets">

	<?php foreach ( $tickets as $key => $ticket ) : ?>

		<?php $this->template( 'blocks/tickets/registration/summary/ticket', array( 'ticket' => $ticket, 'key' => $key ) ); ?>

	<?php endforeach; ?>

</div>