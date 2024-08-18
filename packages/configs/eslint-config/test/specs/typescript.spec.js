import { test, expect } from 'bun:test'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import {
	createESLint,
	getAvailableCoreRules,
	getAvailablePluginRules,
	getConfiguredCoreRules,
	getConfiguredPluginRules,
	isLayoutRule,
	isExtensionRule,
	isDeprecatedRule,
} from '../helpers/eslint.js'
import config from '../../src/typescript.js'

const availableCoreRules = getAvailableCoreRules()
const availablePluginRules = getAvailablePluginRules(config)
const configuredCoreRules = getConfiguredCoreRules(config)
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

test('Config should include obsolete core rules and turn them off', () =>
	[
		'constructor-super',
		'getter-return',
		'no-const-assign',
		'no-dupe-args',
		'no-dupe-class-members',
		'no-dupe-keys',
		'no-func-assign',
		'no-import-assign',
		'no-new-symbol',
		'no-obj-calls',
		'no-redeclare',
		'no-setter-return',
		'no-this-before-super',
		'no-undef',
		'no-unreachable',
		'no-unsafe-negation',
		'valid-typeof',
		...Object.entries(typescriptPlugin.rules).reduce(
			(acc, [name, rule]) => {
				if (!isExtensionRule(rule) || !isDeprecatedRule(rule)) {
					return acc
				}

				const base = rule.meta.docs.extendsBaseRule
				const baseName = base === true ? name : base
				const baseRule = availableCoreRules.get(baseName)

				if (!isDeprecatedRule(baseRule)) {
					return acc
				}

				acc.push(baseName)

				return acc
			},
			[]
		)
	].forEach((name) => {
		expect(configuredCoreRules).toHaveEntry(name, 'off')
	}))

test('Config should exclude layout and deprecated rules', () =>
	configuredPluginRules.forEach((_value, name) => {
		expect(availablePluginRules).toHaveEntry(name)
		expect(availablePluginRules.get(name)).not.toBeLayoutRule(name)
		expect(availablePluginRules.get(name)).not.toBeDeprecatedRule(name)
	}))
