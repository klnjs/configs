import { test, expect } from 'bun:test'
import {
	createESLint,
	getAvailableCoreRules,
	getConfiguredCoreRules,
	isLayoutRule,
	isDeprecatedRule
} from '../helpers/eslint.js'
import config from '../../src/core.js'

const availableRules = getAvailableCoreRules()
const configuredRules = getConfiguredCoreRules(config)

test('Config should load', () => {
	expect(() => createESLint(config).lintText('')).not.toThrow()
})

test('Config should include required rules', () =>
	availableRules.forEach((rule, name) => {
		if (!isDeprecatedRule(rule) && !isLayoutRule(rule)) {
			expect(configuredRules).toHaveEntry(name)
		}
	}))

test('Config should exclude layout and deprecated rules', () =>
	configuredRules.forEach((_value, name) => {
		expect(availableRules).toHaveEntry(name)
		expect(availableRules.get(name)).not.toBeLayoutRule(name)
		expect(availableRules.get(name)).not.toBeDeprecatedRule(name)
	}))
