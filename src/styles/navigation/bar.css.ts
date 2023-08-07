import {style} from '@vanilla-extract/css';

import {$container} from '../container.css';
import {platformTheme} from '../theme/theme.css';

export const navigationHeight = '64px';

export const $fixedNavigation = style([{
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	zIndex: 2,

	backdropFilter: 'blur(16px)',
	borderBottom: `1px solid ${platformTheme.color.glassicBorder}`,
	background: platformTheme.color.glassicBackground,
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
	color: platformTheme.color.text,
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

	color: platformTheme.color.textSecondary,
	fontSize: '14px',
});

export const $navigationItemActive = style([$navigationItem, {
	color: platformTheme.color.text,
}]);

