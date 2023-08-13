module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
				'plugin:perfectionist/recommended-natural',
			],
			rules: {
				'perfectionist/sort-enums': 0,
			},
			files: [
				'*.ts',
				'*.tsx',
			],
		},
		{
			rules: {
				'react/react-in-jsx-scope': 0,
			},
			files: [
				'*.tsx',
			],
		},
		{
			rules: {
				'perfectionist/sort-objects': 0,
				'@typescript-eslint/naming-convention': 0,
			},
			files: [
				'*.css.ts',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	ignorePatterns: [
		'dist',
	],
};
