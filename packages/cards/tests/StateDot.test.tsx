import { render, testA11y } from '@easyfeedback/test-utils'

import { StateDot } from '../src/utils/StateDot'

describe('StateDot component', () => {
  it('passes a11y test', async () => {
    await testA11y(<StateDot state="published" />)
  })

  it('renders the dot with the color for published', () => {
    const { getByTestId } = render(<StateDot state="published" />)
    expect(getByTestId('StateDot')).toHaveStyleRule('background-color', 'teal.500')
  })

  it('renders the dot with the color for planned', () => {
    const { getByTestId } = render(<StateDot state="planned" />)
    expect(getByTestId('StateDot')).toHaveStyleRule('background-color', 'yellow.500')
  })

  it('renders the dot with the color for closed', () => {
    const { getByTestId } = render(<StateDot state="closed" />)
    expect(getByTestId('StateDot')).toHaveStyleRule('background-color', 'red.500')
  })
})
