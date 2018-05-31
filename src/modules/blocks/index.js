import { registerBlockType } from '@wordpress/blocks';

import eventDetails from 'blocks/event-details';
import eventVenue from 'blocks/event-venue';
import eventSubtitle from 'blocks/event-subtitle';
import eventLinks from 'blocks/event-links';
import eventPrice from 'blocks/event-price';
import eventCategory from 'blocks/event-category';
import eventTags from 'blocks/event-tags';
import eventOrganizer from 'blocks/event-organizer';
import eventWebsite from 'blocks/event-website';
import './style.pcss';

const blocks = [
	eventDetails,
	eventVenue,
	eventSubtitle,
	eventLinks,
	eventPrice,
	eventCategory,
	eventTags,
	eventOrganizer,
	eventWebsite,
];

blocks.forEach( block => {
	const blockName = `tribe/${ block.id }`;
	registerBlockType( blockName, block );
} );

export default blocks;

