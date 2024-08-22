import {
	printExpected,
	printReceived,
	printMatcherError
} from '@klnjs/configs-internals-test/printers'
import { isDeprecatedOption, isSpecialOption } from './prettier'

export const toBeDeprecatedOption = (option) => {
	if (!option) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived('received')} value must be instance of Prettier option\n`
				)
		}
	}

	const pass = isDeprecatedOption(option)
	const message = () =>
		`Expected ${printExpected(option.name)} ${pass ? 'to not be' : 'to be'} deprecated\n`

	return { pass, message }
}

export const toBeSpecialOption = (option) => {
	if (!option) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived('received')} value must be instance of Prettier option\n`
				)
		}
	}

	const pass = isSpecialOption(option)
	const message = () =>
		`Expected ${printExpected(option.name)} ${pass ? 'to not be' : 'to be'} of type Special\n`

	return { pass, message }
}
