import { render, testA11y } from '@easyfeedback/test-utils'

import { IconButton } from '../src'

const mockLabel = 'Mocked IconButton label'

describe('IconButton component', () => {
  it('passes a11y test', async () => {
    await testA11y(<IconButton ariaLabel={mockLabel} variant="add" />)
  })

  it('uses a font size of `2xl`, if size is set to the default `lg` value', () => {
    const { getByTestId } = render(<IconButton ariaLabel={mockLabel} variant="add" />)
    expect(getByTestId('IconButton')).toHaveStyleRule('font-size', '2xl')
  })

  it('uses a font size of `lg`, if size value is set to `sm`', () => {
    const { getByTestId } = render(<IconButton ariaLabel={mockLabel} size="sm" variant="add" />)
    expect(getByTestId('IconButton')).toHaveStyleRule('font-size', 'xs')
  })

  it('uses the `add` icon', () => {
    const { getByTestId } = render(<IconButton ariaLabel={mockLabel} variant="add" />)
    expect(getByTestId('IconButton').firstChild).toHaveAttribute('data-testid', 'FaPlus')
  })

  it('uses the `plane` icon', () => {
    const { getByTestId } = render(<IconButton ariaLabel={mockLabel} variant="plane" />)
    expect(getByTestId('IconButton').firstChild).toHaveAttribute('data-testid', 'FaPlane')
  })
})
