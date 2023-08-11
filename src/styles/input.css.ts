import {style} from '@vanilla-extract/css';

import {platformTheme} from './theme/theme.css';

export const $input = style({
	boxSizing: 'border-box',

	fontSize: '16px',
	padding: '16px 20px',
	borderRadius: '8px',
	border: `1px solid ${platformTheme.color.glassicBorder}`,

	color: platformTheme.color.textSecondary,
	background: platformTheme.color.backgroundSecondary,

	transition: 'background ease .2s',

	':focus': {
		outline: 'none',
		background: platformTheme.color.glassicBackground,
	},
});

export const $inputTransparent = style({
	boxSizing: 'border-box',

	fontSize: '16px',

	padding: '8px 10px',
	border: `1px solid ${platformTheme.color.glassicBorder}`,
	borderRadius: '8px',

	color: platformTheme.color.textSecondary,
	background: platformTheme.color.backgroundSecondary,

	transition: 'border ease .2s',

	':focus': {
		outline: 'none',
		border: `1px solid ${platformTheme.color.textSecondary}`,
	},
});

export const $checkbox = style({
	display: 'inline-flex',
	flexShrink: 0,
	alignContent: 'center',
	alignItems: 'center',
	gap: '4px',

	position: 'relative',
});

export const $checkboxInput = style({
	display: 'none',
});

export const $checkboxIcon = style({
	color: platformTheme.color.textSecondary,
	fontSize: '1.8em',

	borderRadius: '4px',

	cursor: 'pointer',

	transition: 'transform ease-out .2s, opacity ease-in .1s, color ease .15s',

	selectors: {
		[`${$checkbox}:hover > &`]: {
			color: platformTheme.color.text,
		},
		[`${$checkboxInput}:not(:checked) ~ &[data-active]`]: {
			transform: 'scale(0)',
			opacity: 0,
		},
		'svg ~ &': {
			position: 'absolute',
		},
	},
});

export const $checkboxLabel = style({
	cursor: 'pointer',
	userSelect: 'none',
});

export const $select = style([$inputTransparent, {
	transition: 'none',

	':focus': {
		outline: 'none',
		border: `1px solid ${platformTheme.color.glassicBorder}`,
	},
}]);
