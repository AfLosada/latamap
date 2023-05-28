/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		`@remix-run/eslint-config`,
		`@remix-run/eslint-config/node`,
		`plugin:react/recommended`,
		`plugin:react-hooks/recommended`,
		`plugin:jsx-a11y/recommended`,
		`plugin:promise/recommended`,
		`plugin:@typescript-eslint/recommended`,
		`prettier`,
	],
	plugins: [`simple-import-sort`],
	rules: {
		'simple-import-sort/imports': 2,
		'@typescript-eslint/explicit-module-boundary-types': `off`,
		'@typescript-eslint/no-explicit-any': `off`,
		'@typescript-eslint/ban-ts-comment': `off`,
		'@typescript-eslint/no-non-null-assertion': `off`,
		'react/react-in-jsx-scope': `off`,
		'array-bracket-spacing': [`error`, `never`],
		'block-spacing': `error`,
		'brace-style': [`error`, `1tbs`, { allowSingleLine: true }],
		'comma-spacing': [`error`, { before: false, after: true }],
		'comma-style': [`error`, `last`],
		'dot-location': [`error`, `property`],
		'eol-last': [`error`, `always`],
		'func-names': [`error`, `always`],
		'handle-callback-err': [`error`, `error`],
		indent: [`error`, `tab`, { SwitchCase: 1 }],
		'jsx-quotes': [`error`, `prefer-single`],
		quotes: [`error`, `backtick`],
		'keyword-spacing': [`error`, { before: true, after: true }],
		'max-nested-callbacks': [`error`, { max: 4 }],
		'max-statements-per-line': [`error`, { max: 1 }],
		'no-empty-function': `off`,
		'no-explicit-any': `off`,
		'no-floating-decimal': `error`,
		'no-multi-spaces': `error`,
		'no-multiple-empty-lines': [`error`, { max: 2, maxEOF: 0, maxBOF: 0 }],
		'no-new-object': `error`,
		'no-shadow': [`error`, { allow: [`err`, `resolve`, `reject`, `cb`] }],
		'no-trailing-spaces': [`error`],
		'no-var': `error`,
		'object-curly-newline': `error`,
		'object-curly-spacing': [`error`, `always`],
		'prefer-arrow-callback': `error`,
		'prefer-const': `error`,
		'prefer-spread': `error`,
		'prefer-template': `error`,
		'react/prop-types': `off`,
		'react/display-name': `off`,
		semi: [`error`, `always`],
		'semi-spacing': `error`,
		'semi-style': [`error`, `last`],
		'space-before-blocks': `error`,
		'space-before-function-paren': [`error`, { anonymous: `never`, named: `never`, asyncArrow: `always` }],
		'space-in-parens': [`error`, `never`],
		'space-infix-ops': `error`,
		'space-unary-ops': `error`,
		'spaced-comment': [`error`, `always`],
		'template-curly-spacing': `error`,
		yoda: `error`,
	},
};
