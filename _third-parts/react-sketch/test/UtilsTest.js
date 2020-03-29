/* global expect,describe,it */
/* eslint no-console: 0 */
/* eslint-env node, mocha */

import { uuid4 } from '../src/utils'

describe('Utils', () => {
  it('Loads Normally', () => {
    require('../src/utils')
  })

  it('Generates random uuid', () => {
    expect(uuid4()).toBeDefined()
  })
})
