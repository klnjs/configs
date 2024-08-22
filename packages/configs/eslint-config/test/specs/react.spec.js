import { test, expect } from 'bun:test'
import {
	createESLint,
	getAvailablePluginRules,
	getConfiguredPluginRules,
	isLayoutRule,
	isDeprecatedRule
} from '../helpers/eslint.js'
import config from '../../src/react.js'

const availablePluginRules = getAvailablePluginRules(config)
const configuredPluginRules = getConfiguredPluginRules(config)

test('Config should load', () => {
	expect(() => createESLint(config).lintText('')).not.toThrow()
})

test('Config should include required rules', () =>
	availablePluginRules.forEach((rule, name) => {
		if (!isDeprecatedRule(rule) && !isLayoutRule(rule)) {
			expect(configuredPluginRules).toHaveEntry(name)
		}
	}))

test('Config should exclude unknown, layout and deprecated rules', () =>
	configuredPluginRules.forEach((_value, name) => {
		expect(availablePluginRules).toHaveEntry(name)
		expect(availablePluginRules.get(name)).not.toBeLayoutRule(name)
		expect(availablePluginRules.get(name)).not.toBeDeprecatedRule(name)
	}))
