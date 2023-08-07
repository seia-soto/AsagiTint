import {createTheme, style} from '@vanilla-extract/css';

import {$container} from './container.css';

export const navigationHeight = '64px';

const [$navigationTheme, navigationTheme] = createTheme({
	color: {
		background: 'hsl(0 0% 40% / 20%)',
		border: 'hsl(0 0% 80%)',
		textPrimary: 'hsl(0 0% 10%)',
		textSecondary: 'hsl(0 0% 30%)',
	},
});

export const $fixedNavigationShell = style([$navigationTheme, {
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',

	background: navigationTheme.color.background,
	backdropFilter: 'blur(16px)',
	borderBottom: `1px solid ${navigationTheme.color.border}`,
	boxShadow: '0 4px 30px rgba(255,255,255,.1)',

	// eslint-disable-next-line @typescript-eslint/naming-convention
	'@media': {
		'(prefers-color-scheme: dark)': {
			vars: {
				[navigationTheme.color.background]: 'hsl(0 0% 60% / 20%)',
				[navigationTheme.color.border]: 'hsl(0 0% 20%)',
				[navigationTheme.color.textPrimary]: 'hsl(0 0% 90%)',
				[navigationTheme.color.textSecondary]: 'hsl(0 0% 70%)',
			},
		},
	},
}]);

export const $fixedContentPusher = style({
	paddingTop: navigationHeight,
});

export const $navigation = style([$container, {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '24px',

	height: navigationHeight,
	padding: '0 40px',
}]);

export const $navigationHeader = style({
	color: navigationTheme.color.textPrimary,
	fontSize: '24px',

	margin: 0,
});

export const $navigationItemGroup = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '0 12px',

	height: '100%',
	margin: 0,
	paddingLeft: 0,
});

export const $navigationItem = style({
	listStyle: 'none',

	color: navigationTheme.color.textSecondary,
	fontSize: '14px',
});

export const $navigationItemActive = style([$navigationItem, {
	color: navigationTheme.color.textPrimary,
}]);
