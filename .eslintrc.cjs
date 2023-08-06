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
