import { test, expect } from 'bun:test'
import { ESLint } from 'eslint'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import core from './core.js'

const rules = builtinRules

test('Config should load', () => {
	expect(() => new ESLint({ baseConfig: core }).lintText('')).not.toThrow()
})

test('Config should include code rules', () =>
	rules.forEach((rule, name) => {
		if (!rule.meta.deprecated && rule.meta.type !== 'layout') {
			expect(core.rules).toHaveProperty(name)
		}
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	Object.keys(core.rules).forEach((name) => {
		expect(rules.get(name)).toBeDefined()
		expect(rules.get(name)).not.toHaveProperty(`meta.type`, 'layout')
		expect(rules.get(name)).not.toHaveProperty(`meta.deprecated`, true)
	}))
