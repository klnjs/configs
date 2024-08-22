import { expect } from 'bun:test'
import { toHaveEntry } from '@klnjs/configs-internals-test/matchers'
import { toBeDeprecatedOption, toBeSpecialOption } from './matchers'

expect.extend({ toHaveEntry, toBeSpecialOption, toBeDeprecatedOption })
