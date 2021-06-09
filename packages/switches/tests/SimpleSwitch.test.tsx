import { testA11y } from '@easyfeedback/test-utils'

import { SimpleSwitch } from '../src/Switch/SimpleSwitch'

describe('SimpleSwitch component', () => {
  it('passes a11y test', async () => {
    await testA11y(<SimpleSwitch label="myLabel" />)
  })
})
