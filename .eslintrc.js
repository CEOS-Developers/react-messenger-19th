module.exports = {
	env: {
		browser: true,
		es2021: true,
	},

	extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react'],
	ignorePatterns: ['typings.d.ts'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/non-nullable-type-assertion-style': 'off',
	},
};
