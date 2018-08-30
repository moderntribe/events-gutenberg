<?php
/**
 * This template renders a Single Ticket content
 * composed by Title and Description currently
 *
 * @version TBD
 *
 */
$attendee_id   = null;
$required      = isset( $field->required ) && 'on' === $field->required ? true : false;
$option_id     = "tribe-tickets-meta_{$field->slug}" . ( $attendee_id ? '_' . $attendee_id : '' );
$field         = (array) $field;
$multiline     = isset( $field['extra'] ) && isset( $field['extra']['multiline'] ) ? $field['extra']['multiline'] : '';
$value         = '';
$is_restricted = false;
$field_name    = 'tribe-tickets-meta[' . $attendee_id . '][' . esc_attr( $field['slug'] ) . ']';
?>
<div
	class="tribe-field tribe-block__tickets__item__attendee__field__text <?php echo $required ? 'tribe-tickets-meta-required' : ''; ?>"
>
	<label for="<?php echo esc_attr( $option_id ); ?>"><?php echo wp_kses_post( $field['label'] ); ?></label>
	<?php if ( $multiline ) : ?>
		<textarea
			id="<?php echo esc_attr( $option_id ); ?>"
			name="<?php echo $field_name; ?>"
			<?php echo $required ? 'required' : ''; ?>
			<?php disabled( $is_restricted ); ?>
		><?php echo esc_textarea( $value ); ?></textarea>
	<?php else : ?>
		<input
			type="text"
			id="<?php echo esc_attr( $option_id ); ?>"
			name="<?php echo $field_name; ?>"
			value="<?php echo esc_attr( $value ); ?>"
			<?php echo $required ? 'required' : ''; ?>
			<?php disabled( $is_restricted ); ?>
		>
	<?php endif; ?>
</div>