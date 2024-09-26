import tseslint from 'typescript-eslint'

export default {
	name: '@klnjs/typescript',
	files: ['**/*.ts', '**/*.tsx', '**/*.svelte'],
	plugins: {
		'@typescript-eslint': tseslint.plugin
	},
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
			extraFileExtensions: ['.svelte']
		}
	},
	rules: {
		// The following builtin rules are checked more thoroughly by the TypeScript compiler.
		// See: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
		'constructor-super': 'off',
		'getter-return': 'off',
		'no-const-assign': 'off',
		'no-dupe-args': 'off',
		'no-dupe-keys': 'off',
		'no-func-assign': 'off',
		'no-import-assign': 'off',
		'no-new-symbol': 'off',
		'no-obj-calls': 'off',
		'no-setter-return': 'off',
		'no-this-before-super': 'off',
		'no-undef': 'off',
		'no-unreachable': 'off',
		'no-unsafe-negation': 'off',
		'valid-typeof': 'off',

		// The following builtin rules have a TypeScript extension rule.
		// See: https://typescript-eslint.io/rules/#extension-rules
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		'default-param-last': 'off',
		'dot-notation': 'off',
		'init-declarations': 'off',
		'max-params': 'off',
		'no-array-constructor': 'off',
		'no-dupe-class-members': 'off',
		'no-empty-function': 'off',
		'no-implied-eval': 'off',
		'no-invalid-this': 'off',
		'no-loop-func': 'off',
		'no-magic-numbers': 'off',
		'no-redeclare': 'off',
		'no-restricted-imports': 'off',
		'no-shadow': 'off',
		'no-throw-literal': 'off',
		'no-unused-expressions': 'off',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-constructor': 'off',
		'prefer-destructuring': 'off',
		'prefer-promise-reject-errors': 'off',
		'require-await': 'off',

		// The following configures all typescript-eslint rules.
		// See: https://typescript-eslint.io/rules
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-ts-comment': 'error',
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/class-literal-property-style': 'error',
		'@typescript-eslint/class-methods-use-this': 'error',
		'@typescript-eslint/consistent-generic-constructors': 'error',
		'@typescript-eslint/consistent-indexed-object-style': 'error',
		'@typescript-eslint/consistent-return': 'off',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'@typescript-eslint/consistent-type-exports': 'off',
		'@typescript-eslint/consistent-type-imports': 'off',
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/init-declarations': 'off',
		'@typescript-eslint/max-params': 'off',
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/method-signature-style': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE']
			},
			{ selector: 'function', format: ['camelCase', 'PascalCase'] },
			{ selector: 'typeLike', format: ['PascalCase'] }
		],
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-array-delete': 'error',
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/no-deprecated': 'error',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-duplicate-type-constituents': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-object-type': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-import-type-side-effects': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/no-meaningless-void-operator': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': 'error',
		'@typescript-eslint/no-mixed-enums': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-redeclare': 'error',
		'@typescript-eslint/no-redundant-type-constituents': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-types': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'@typescript-eslint/no-unnecessary-parameter-property-assignment':
			'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-template-expression': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-unnecessary-type-parameters': 'error',
		'@typescript-eslint/no-unsafe-argument': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'error',
		'@typescript-eslint/no-unsafe-call': 'error',
		'@typescript-eslint/no-unsafe-declaration-merging': 'error',
		'@typescript-eslint/no-unsafe-enum-comparison': 'error',
		'@typescript-eslint/no-unsafe-function-type': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'error',
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/no-unsafe-unary-minus': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: true }
		],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-useless-empty-export': 'error',
		'@typescript-eslint/no-wrapper-object-types': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/only-throw-error': 'error',
		'@typescript-eslint/parameter-properties': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-destructuring': 'off',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-find': 'error',
		'@typescript-eslint/prefer-for-of': 'off',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-promise-reject-errors': 'error',
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/prefer-return-this-type': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/restrict-template-expressions': 'error',
		'@typescript-eslint/return-await': 'error',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/typedef': 'off',
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/unified-signatures': 'error',
		'@typescript-eslint/use-unknown-in-catch-callback-variable': 'error'
	}
}
