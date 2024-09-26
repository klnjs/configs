// biome-ignore lint/style/noNamespaceImport: espree is export only as a namespace
import * as espree from 'espree';
import tseslint from 'typescript-eslint'
import sveltePlugin from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'

export default {
	name: '@klnjs/svelte',
	files: ['**/*.svelte'],
	plugins: {
		svelte: sveltePlugin
	},
	languageOptions: {
		parser: svelteParser,
		parserOptions: {
			parser: {
				js: espree,
				ts: tseslint.parser
			}
		}
	},
	rules: {
		// The following builtin rules are known to cause problems with `.svelte`.
		// See: https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/src/configs/flat/base.ts
		'no-inner-declarations': 'off',
		'no-self-assign': 'off',

		// The following configures all typescript-eslint rules.
		// See: https://sveltejs.github.io/eslint-plugin-svelte/rules/
		'svelte/block-lang': 'off',
		'svelte/button-has-type': 'error',
		'svelte/comment-directive': 'error',
		'svelte/no-at-debug-tags': 'error',
		'svelte/no-ignored-unsubscribe': 'error',
		'svelte/no-immutable-reactive-statements': 'error',
		'svelte/no-inline-styles': 'off',
		'svelte/no-reactive-functions': 'error',
		'svelte/no-reactive-literals': 'error',
		'svelte/no-svelte-internal': 'error',
		'svelte/no-unused-class-name': 'error',
		'svelte/no-unused-svelte-ignore': 'error',
		'svelte/no-useless-mustaches': 'error',
		'svelte/prefer-destructured-store-props': 'error',
		'svelte/require-each-key': 'error',
		'svelte/require-event-dispatcher-types': 'error',
		'svelte/require-optimized-style-attribute': 'error',
		'svelte/require-stores-init': 'error',
		'svelte/system': 'error',
		'svelte/valid-each-key': 'error',
		'svelte/derived-has-same-inputs-outputs': 'error',
		'svelte/experimental-require-slot-types': 'off',
		'svelte/experimental-require-strict-events': 'off',
		'svelte/infinite-reactive-loop': 'error',
		'svelte/no-dom-manipulating': 'error',
		'svelte/no-at-html-tags': 'error',
		'svelte/no-dupe-else-if-blocks': 'error',
		'svelte/no-dupe-on-directives': 'error',
		'svelte/no-dupe-style-properties': 'error',
		'svelte/no-dupe-use-directives': 'error',
		'svelte/no-dynamic-slot-name': 'error',
		'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
		'svelte/no-not-function-handler': 'error',
		'svelte/no-object-in-text-mustaches': 'error',
		'svelte/no-reactive-reassign': 'error',
		'svelte/no-shorthand-style-property-overrides': 'error',
		'svelte/no-store-async': 'error',
		'svelte/no-unknown-style-directive-property': 'error',
		'svelte/require-store-callbacks-use-set-param': 'error',
		'svelte/require-store-reactive-access': 'error',
		'svelte/valid-compile': 'error',
		'svelte/valid-prop-names-in-kit-pages': 'error',
		'svelte/no-extra-reactive-curlies': 'error',
		'svelte/no-goto-without-base': 'error',
		'svelte/no-inner-declarations': 'error',
		'svelte/no-restricted-html-elements': 'off',
		'svelte/no-target-blank': 'error',
		'svelte/prefer-class-directive': 'error',
		'svelte/prefer-style-directive': 'error'
	}
}
