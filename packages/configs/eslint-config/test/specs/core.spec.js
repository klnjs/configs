import { test, expect } from 'bun:test'
import {
	createESLint,
	getAvailableCoreRules,
	getConfiguredCoreRules,
	isLayoutRule,
	isDeprecatedRule
} from '../helpers/eslint.js'
import config from '../../src/core.js'

const availableCoreRules = getAvailableCoreRules()
const configuredCoreRules = getConfiguredCoreRules(config)

test('Config should load', () => {
	expect(() => createESLint(config).lintText('')).not.toThrow()
})

test('Config should include required rules', () =>
	availableCoreRules.forEach((rule, name) => {
		if (!isDeprecatedRule(rule) && !isLayoutRule(rule)) {
			expect(configuredCoreRules).toHaveEntry(name)
		}
	}))

test('Config should exclude layout and deprecated rules', () =>
	configuredCoreRules.forEach((_value, name) => {
		expect(availableCoreRules).toHaveEntry(name)
		expect(availableCoreRules.get(name)).not.toBeLayoutRule(name)
		expect(availableCoreRules.get(name)).not.toBeDeprecatedRule(name)
	}))
