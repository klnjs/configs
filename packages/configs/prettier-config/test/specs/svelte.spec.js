import { test, expect } from 'bun:test'
import prettier from 'prettier'
import { options } from 'prettier-plugin-svelte'
import config from '../../src/svelte.js'

const pluginEntry = ['plugins', {}]
const availableOptions = new Map([pluginEntry, ...Object.entries(options)])

test('Config should load', () => {
	expect(() =>
		prettier.format('', { filepath: 'file.svelte', ...config })
	).not.toThrow()
})

test('Config should include code options', () =>
	availableOptions.forEach((option, name) => {
		if (option.deprecated === undefined) {
			expect(config).toHaveProperty(name)
		}
	}))

test('Config should exclude unknown and deprecated options', () =>
	Object.keys(config).forEach((name) => {
		expect(availableOptions).toHaveEntry(name)
		expect(availableOptions.get(name)).not.toHaveProperty('deprecated')
	}))
