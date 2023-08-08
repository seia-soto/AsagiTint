import {style} from '@vanilla-extract/css';

export const $container = style({
	display: 'block',
	margin: '0 auto',

	maxWidth: '1100px',
});

export const $contentContainer = style([$container, {
	padding: '24px 20px',
}]);

export const $inlineContentContainer = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '18px',
});
