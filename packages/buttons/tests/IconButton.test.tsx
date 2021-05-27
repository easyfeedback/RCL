import { render, testA11y } from '@easyfeedback/test-utils'

import { IconButton } from '../src'

describe('IconButton component', () => {
  it('passes a11y test', async () => {
    await testA11y(<IconButton ariaLabel="IconButton label" variant="add" />)
  })

  it('uses the `add` icon', () => {
    const { getByTestId } = render(<IconButton ariaLabel="IconButton label" variant="add" />)
    expect(getByTestId('IconButton').firstChild).toHaveAttribute('data-testid', 'FaPlus')
  })

  it('uses the `plane` icon', () => {
    const { getByTestId } = render(<IconButton ariaLabel="IconButton label" variant="plane" />)
    expect(getByTestId('IconButton').firstChild).toHaveAttribute('data-testid', 'FaPlane')
  })
})
