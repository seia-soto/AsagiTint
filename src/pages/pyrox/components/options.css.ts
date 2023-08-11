import {style} from '@vanilla-extract/css';

export const $optionHeader = style({
	margin: 0,
});

export const $optionGroup = style({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	gap: '8px 16px',

	margin: 0,
	padding: 0,
});

export const $optionItem = style({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	gap: '8px 20px',

	listStyle: 'none',
});
