export const isSpecialOption = (option) =>
	option.name === 'filepath' ||
	option.name === 'parser' ||
	option.name === 'plugins' ||
	option.name === 'cursorOffset' ||
	option.name === 'rangeEnd' ||
	option.name === 'rangeStart'

export const isDeprecatedOption = (option) => option.deprecated !== undefined
