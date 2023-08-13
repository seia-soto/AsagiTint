import {style} from '@vanilla-extract/css';

import {platformTheme} from './theme/theme.css';

export const $fullWidth = style({
	width: '100%',
});

// Uncategorized
export const $divider = style({
	width: '100%',
	height: '1px',
	background: platformTheme.color.glassicBorder,
});
