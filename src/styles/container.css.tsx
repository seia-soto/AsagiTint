import {style} from '@vanilla-extract/css';

export const $container = style({
	display: 'block',
	margin: '0 auto',

	maxWidth: '1280px',
});

export const $contentContainer = style([$container, {
	padding: '24px 20px',
}]);
