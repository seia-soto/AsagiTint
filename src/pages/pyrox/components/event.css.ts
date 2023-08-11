import {style} from '@vanilla-extract/css';

import {$inlineContentContainer} from '../../../styles/container.css';
import {platformTheme} from '../../../styles/theme/theme.css';

export const $eventList = style({
	listStyle: 'none',

	padding: 0,
	margin: 0,

	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
});

export const $eventShell = style({
	padding: 0,
	margin: 0,

	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
});

export const $event = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	alignContent: 'center',
	gap: '4px',
});

export const $eventActionGroup = style({
	display: 'flex',
	flexDirection: 'row',
	gap: '2px',
});

export const $eventActionItem = style({
	width: 0,
});

export const $eventIconShell = style({
	display: 'inline-flex',
	alignContent: 'center',
	alignItems: 'center',

	position: 'relative',
});

export const $eventCheckboxIcon = style({
	color: platformTheme.color.textSecondary,
	fontSize: '1.8em',

	borderRadius: '4px',

	cursor: 'pointer',

	transition: 'transform ease-out .2s, color ease .2s',

	':hover': {
		color: platformTheme.color.text,
	},

	selectors: {
		[`${$eventActionItem}:checked ~ &:not([data-active])`]: {
			transform: 'scale(0)',
		},
		[`${$eventActionItem}:not(:checked) ~ &[data-active]`]: {
			transform: 'scale(0)',
		},
		'svg ~ &': {
			position: 'absolute',
		},
	},
});

export const $eventDropdownIcon = style({
	color: platformTheme.color.textSecondary,
	fontSize: '1.8em',

	borderRadius: '4px',

	cursor: 'pointer',

	transition: 'transform ease .2s, color ease .2s',

	':hover': {
		color: platformTheme.color.text,
	},

	selectors: {
		[`${$eventActionItem}:checked ~ &`]: {
			transform: 'rotate(180deg)',
		},
	},
});

export const $eventBody = style([$inlineContentContainer, {
	transition: 'opacity ease .2s',
	transitionDelay: '0s, .2s',
	transformOrigin: 'top',

	padding: '12px',
	borderRadius: '8px',

	overflow: 'hidden',

	background: platformTheme.color.backgroundSecondary,

	selectors: {
		'&[data-active="false"]': {
			opacity: 0,
			height: 0,
			padding: 0,
		},
	},
}]);

export const $eventFooter = style({
	marginLeft: 'auto',
});
