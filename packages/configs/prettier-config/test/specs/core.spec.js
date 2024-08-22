import { test, expect } from 'bun:test'
import prettier from 'prettier'
import { isDeprecatedOption, isSpecialOption } from '../helpers/prettier.js'
import config from '../../src/core.js'

const support = await prettier.getSupportInfo({ showDeprecated: true })
const options = new Map(
	Object.values(support.options).map((option) => [option.name, option])
)

test('Config should load', () => {
	expect(() =>
		prettier.format('', { filepath: 'file.js', ...config })
	).not.toThrow()
})

test('Config should include required options', () =>
	options.forEach((option) => {
		if (!isSpecialOption(option) && !isDeprecatedOption(option)) {
			expect(config).toHaveProperty(option.name)
		}
	}))

test('Config should exclude unknown, global, special and deprecated options', () =>
	Object.keys(config).forEach((name) => {
		expect(options.get(name)).toBeDefined()
		expect(options.get(name)).not.toBeSpecialOption()
		expect(options.get(name)).not.toBeDeprecatedOption()
	}))
