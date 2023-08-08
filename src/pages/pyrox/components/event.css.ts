import {style} from '@vanilla-extract/css';

import {platformTheme} from '../../../styles/theme/theme.css';

export const $eventRail = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',

	margin: 0,
	padding: 0,
});

export const $event = style({
	listStyle: 'none',

	border: `1px solid ${platformTheme.color.glassicBorder}`,

	borderRadius: '8px',
	padding: '16px 20px',
	margin: 0,
});

export const $eventHeader = style({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignItems: 'center',
	gap: '20px',

	width: '100%',
});

export const $eventHeading = style({
	fontSize: '20px',
	fontWeight: 700,
});

export const $eventActionGroup = style({
	listStyle: 'none',
	padding: 0,
	margin: 0,

	display: 'flex',
	flexDirection: 'row',
	gap: '2px',

	marginLeft: 'auto',
});

export const $eventActionItem = style({
	listStyle: 'none',

	display: 'inline-flex',
	flexDirection: 'row',
	alignContent: 'center',
	alignItems: 'center',
	gap: '4px',

	transition: 'background ease .2s',

	padding: '10px 12px',
	borderRadius: '8px',

	':hover': {
		background: platformTheme.color.glassicBackgroundActive,
	},
});
