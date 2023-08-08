import {style} from '@vanilla-extract/css';

import {$contentContainer} from '../container.css';
import {platformTheme} from '../theme/theme.css';

export const sideWidth = '300px';

export const $fixedSideDirector = style({
	position: 'relative',
});

export const $fixedSide = style({
	position: 'fixed',

	width: sideWidth,
	height: '100vh',
});

export const $fixedSideContentPusher = style({
	paddingLeft: sideWidth,
});

export const $side = style([$contentContainer, {
	width: sideWidth,
}]);

export const $sideItemGroup = style({
	padding: 0,
	margin: 0,

	display: 'flex',
	flexDirection: 'column',
	alignContent: 'center',
	gap: '12px',
});

export const $sideItem = style({
	listStyle: 'none',

	color: platformTheme.color.textSecondary,

	background: platformTheme.color.glassicBackground,
	border: `1px solid ${platformTheme.color.glassicBorder}`,

	borderRadius: '8px',

	transition: 'color ease .2s, background ease .2s',
});

export const $sideItemActionable = style([$sideItem, {
	':hover': {
		color: platformTheme.color.text,
	},
}]);

export const $sideItemOptActionableAreaDirector = style({
	padding: '16px 20px',
});

export const $sideItemOptActive = style({
	color: platformTheme.color.text,
	background: platformTheme.color.glassicBackgroundActive,
});
