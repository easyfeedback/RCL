import { fireEvent, render, testA11y } from '@easyfeedback/test-utils'

import { ViewsSwitch } from '../src'

describe('ViewsSwitch component', () => {
  it('passes a11y test', async () => {
    await testA11y(<ViewsSwitch />)
  })

  it('should render a label element with a text before the ViewsSwitch', () => {
    const { getByTestId } = render(<ViewsSwitch />)
    expect(getByTestId(/ChakraViewsSwitch/i).firstChild).toHaveClass('chakra-switch__input')
  })

  it('renders the `MenuButton` in transparent after hover and unhover', () => {
    const { getByTestId } = render(<ViewsSwitch />)
    const container = getByTestId(/ChakraViewsSwitch/i)
    const thumbElement = getByTestId(/thumb/i)

    expect(thumbElement).toHaveTextContent('Tiles')

    fireEvent.click(container)

    expect(thumbElement).toHaveTextContent('List')
  })
})
