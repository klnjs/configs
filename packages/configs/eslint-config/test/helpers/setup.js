import { expect } from 'bun:test'
import { toHaveEntry } from '@klnjs/configs-internals-test/matchers'
import { toBeDeprecatedRule, toBeLayoutRule } from './matchers'

expect.extend({ toBeLayoutRule, toBeDeprecatedRule, toHaveEntry })
