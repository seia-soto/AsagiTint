import {style} from '@vanilla-extract/css';

import {platformTheme} from './theme/theme.css';

export const $input = style({
	width: '100%',
	boxSizing: 'border-box',

	fontSize: '16px',
	padding: '16px 20px',
	borderRadius: '8px',
	border: `1px solid ${platformTheme.color.glassicBorder}`,

	color: platformTheme.color.textSecondary,
	background: platformTheme.color.glassicBackgroundActive,

	transition: 'background ease .2s',

	':focus': {
		outline: 'none',
		background: platformTheme.color.glassicBackground,
	},
});
