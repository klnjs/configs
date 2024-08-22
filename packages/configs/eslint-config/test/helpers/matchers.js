import {
	printExpected,
	printReceived,
	printMatcherError
} from '@klnjs/configs-internals-test/printers'
import { isLayoutRule, isDeprecatedRule } from './eslint'

export const toBeLayoutRule = (rule, name) => {
	if (!rule) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived('received')} value must be instance of ESLint rule\n`
				)
		}
	}

	const pass = isLayoutRule(rule)
	const message = () =>
		`Expected ${printExpected(name)} ${pass ? 'to not be' : 'to be'} of type layout\n`

	return { pass, message }
}

export const toBeDeprecatedRule = (rule, name) => {
	if (!rule) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived('received')} value must be instance of ESLint rule\n`
				)
		}
	}

	const pass = isDeprecatedRule(rule)
	const message = () =>
		`Expected ${printExpected(name)} ${pass ? 'to not be' : 'to be'} deprecated\n`

	return { pass, message }
}
