<?php
/**
 * This template renders the form fields for the different providers
 *
 * @version TBD
 *
 */

$provider     = $this->get( 'provider' );
$provider_id  = $this->get( 'provider_id' );
$this->template( 'blocks/tickets/commerce/fields-' . $provider_id, array( 'provider' => $provider, 'provider_id' => $provider_id ) );
?>
<input name="provider" value="<?php echo esc_attr( $provider->class_name ); ?>" class="tribe-tickets-provider" type="hidden">