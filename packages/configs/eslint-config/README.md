# @klnjs/eslint-config

Provides a collection of shareable [ESLint] configurations for JavaScript / TypeScript projects that can easily be reused across projects.

These configurations aim to provide consistency, code quality, and ensure coding standards are enforced throughout the development process, resulting in cleaner, more maintainable code.

## Installation

You can install the `@klnjs/eslint-config` package using your preferred package manager

```bash
npm install @klnjs/eslint-config --save-dev
```

## How to Use

To use a specific config from `@klnjs/eslint-config`, simply add it in your project's `eslint.config.js` file.

```js
import core from '@klnjs/eslint-config/core'

export default [core]
```

If you're using mutliple configurations, many configs provide extension rules that checks more thoroughly and therefore disables ESLint's built-in rule. Always make sure the extended configs are included after the core config or any other base ESLint configs.

```js
import core from '@klnjs/eslint-config/core'
import react from '@klnjs/eslint-config/react'
import svelte from '@klnjs/eslint-config/svelte'
import typescript from '@klnjs/eslint-config/typescript'

export default [core, react, svelte, typescript]
```

Configurations only support the expected file types, if you want to include custom file types eg. `.mtsx`, you'll need to add them yourself by adjusting the 'files' property in the configurations.

They also don't assume specific environments, so they don't set up `languageOptions.globals`. In most cases, you'll likely need to configure some properties yourself.

```js
import core from '@klnjs/eslint-config/core'
import { serviceworker, browser } from 'globals'

export default [
	{
		files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
		...core,
		languageOptions: {
			...core.languageOptions,
			globals: {
				...serviceworker,
				...browser
			}
		}
	}
]
```

[eslint]: https://github.com/eslint/eslint
