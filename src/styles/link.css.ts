import {style} from '@vanilla-extract/css';

import {platformTheme} from './theme/theme.css';

export const $link = style({
	color: 'inherit',
	textDecorationColor: 'transparent',
	textDecorationStyle: 'solid',
	textDecorationThickness: '1px',
	textUnderlineOffset: '8px',

	transition: '.2s',

	':hover': {
		textDecoration: 'underline',
		textDecorationColor: platformTheme.color.textSecondary,
		textDecorationStyle: 'solid',
		textDecorationThickness: '1px',
		textUnderlineOffset: '8px',
	},
});

export const $linkTransparent = style({
	color: 'inherit',
	textDecoration: 'none',
});

export const $linkOptFluid = style({
	display: 'inline-block',
	width: '100%',
});
