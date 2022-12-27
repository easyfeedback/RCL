import { render, testA11y } from '@easyfeedback/test-utils'

import { StateDot } from '../src/utils/StateDot'

describe('StateDot component', () => {
  it('passes a11y test', async () => {
    await testA11y(<StateDot state="published" />)
  })

  it('renders the dot with the color for initialized', () => {
    const { getByTestId } = render(<StateDot state="initialized" />)
    expect(getByTestId('StateDot')).toHaveStyle('background-color: gray.500')
  })

  it('renders the dot with the color for published', () => {
    const { getByTestId } = render(<StateDot state="published" />)
    expect(getByTestId('StateDot')).toHaveStyle('background-color: teal.500')
  })

  it('renders the dot with the color for paused', () => {
    const { getByTestId } = render(<StateDot state="paused" />)
    expect(getByTestId('StateDot')).toHaveStyle('background-color: yellow.500')
  })

  it('renders the dot with the color for closed', () => {
    const { getByTestId } = render(<StateDot state="closed" />)
    expect(getByTestId('StateDot')).toHaveStyle('background-color: red.500')
  })
})
