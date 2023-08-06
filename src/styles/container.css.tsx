import {style} from '@vanilla-extract/css';

export const $container = style({
	display: 'block',
	padding: '8px 16px',
});

export const $navigationContainer = style([$container, {
	padding: '20px',
}]);
