import {createTheme, style} from '@vanilla-extract/css';

export const [$platformTheme, platformTheme] = createTheme({
	color: {
		background: '#fff',
		text: '#000',
	},
});

export const $root = style([
	$platformTheme,
	{
	// eslint-disable-next-line @typescript-eslint/naming-convention
		'@media': {
			'(prefers-color-scheme: dark)': {
				vars: {
					[platformTheme.color.background]: '#000',
					[platformTheme.color.text]: '#fff',
				},
			},
		},
		background: platformTheme.color.background,

		color: platformTheme.color.text,
		// Create full page theme
		minHeight: '100vh',

		minWidth: '100%',
	},
]);
