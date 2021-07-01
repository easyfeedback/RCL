import { render, testA11y } from '@easyfeedback/test-utils'

import { IconButton } from '../src'

const mockLabel = 'Mocked IconButton label'

describe('IconButton component', () => {
  it('passes a11y test', async () => {
    await testA11y(<IconButton ariaLabel={mockLabel} />)
  })

  it('uses a font size of `xs`, if size value is set to `sm`', () => {
    const { getByTestId } = render(<IconButton ariaLabel={mockLabel} size="sm" />)
    expect(getByTestId('IconButton')).toHaveStyleRule('font-size', 'xs')
  })

  it('uses a font size of `2xl`, if size is set to the default `lg` value', () => {
    const { getByTestId } = render(<IconButton ariaLabel={mockLabel} size="lg" />)
    expect(getByTestId('IconButton')).toHaveStyleRule('font-size', '2xl')
  })

  it('uses the `add` icon', () => {
    const { getByTestId } = render(<IconButton ariaLabel={mockLabel} iconVariant="add" />)
    expect(getByTestId('IconButton').firstChild).toHaveAttribute('data-testid', 'FaPlus')
  })

  it('uses the `help` icon', () => {
    const { getByTestId } = render(<IconButton ariaLabel={mockLabel} iconVariant="help" />)
    expect(getByTestId('IconButton').firstChild).toHaveAttribute('data-testid', 'FaQuestion')
  })

  it('uses the `help` icon', () => {
    const { getByTestId } = render(<IconButton ariaLabel={mockLabel} iconVariant="search" />)
    expect(getByTestId('IconButton').firstChild).toHaveAttribute('data-testid', 'FaSearch')
  })

  // TODO: Add variant tests
  // it('has a border, if variant is `outline`', () => {
  //   const { getByTestId } = render(<IconButton ariaLabel={mockLabel} variant="outline" />)
  //   expect(getByTestId('IconButton')).toHaveStyleRule('border', '1px solid')
  // })
})
