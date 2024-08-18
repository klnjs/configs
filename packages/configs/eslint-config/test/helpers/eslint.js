import { ESLint } from 'eslint'
import { builtinRules } from 'eslint/use-at-your-own-risk'

export const createESLint = (config) =>
	new ESLint({
		overrideConfigFile: true,
		overrideConfig: config
	})

export const getAvailableCoreRules = () => builtinRules

export const getConfiguredCoreRules = (config) =>
	new Map(Object.entries(config.rules).filter(([key]) => !key.includes('/')))

export const getAvailablePluginRules = (config) =>
	new Map(
		Object.entries(config.plugins).reduce(
			(acc, [prefix, plugin]) =>
				acc.concat(
					Object.entries(plugin.rules).map(([name, rule]) => [
						`${prefix}/${name}`,
						rule
					])
				),
			[]
		)
	)

export const getConfiguredPluginRules = (config) => {
	const prefixes = Object.keys(config.plugins)
	const entries = Object.entries(config.rules).filter(([key]) =>
		prefixes.some((prefix) => key.startsWith(prefix))
	)

	return new Map(entries)
}

export const isLayoutRule = (rule) => rule.meta.type === 'layout'

export const isDeprecatedRule = (rule) => rule.meta.deprecated

export const isExtensionRule = (rule) => {
	// Typescript eslint extension rule
	if (rule.meta.docs.extendsBaseRule) {
		return true
	}

	return false
}
