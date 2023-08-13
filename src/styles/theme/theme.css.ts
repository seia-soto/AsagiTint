import {createGlobalTheme, globalStyle, style} from '@vanilla-extract/css';

export const platformTheme = createGlobalTheme(':root', {
	color: {
		background: '#fff',
		backgroundSecondary: 'hsl(0% 0% 90%)',
		text: '#000',
		textSecondary: 'hsl(0 0% 30%)',
		glassicBackground: 'hsl(0 0% 95% / 20%)',
		glassicBackgroundActive: 'hsl(0 0% 65% / 40%)',
		glassicBorder: 'hsl(0 0% 80%)',
	},
});

export const breakpoints = {
	half: 'screen and (max-width: 600px)',
	full: 'screen and (min-width: 600px)',
};

globalStyle(':root', {
	'@media': {
		'(prefers-color-scheme: dark)': {
			vars: {
				[platformTheme.color.background]: '#000',
				[platformTheme.color.backgroundSecondary]: 'hsl(0 0% 10%)',
				[platformTheme.color.text]: '#fff',
				[platformTheme.color.textSecondary]: 'hsl(0 0% 70%)',
				[platformTheme.color.glassicBackground]: 'hsl(0 0% 5% / 20%)',
				[platformTheme.color.glassicBackgroundActive]: 'hsl(0 0% 35% / 40%)',
				[platformTheme.color.glassicBorder]: 'hsl(0 0% 20%)',
			},
		},
	},
});

export const $root = style({
	background: platformTheme.color.background,

	color: platformTheme.color.text,

	// Create full page theme
	minHeight: '100vh',
	minWidth: '100%',
	overflowY: 'auto',
	overflowX: 'hidden',
});
