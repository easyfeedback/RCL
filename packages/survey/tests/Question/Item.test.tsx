import { render, testA11y } from '@easyfeedback/test-utils'

import { Item, ItemProps } from '../../src/Question/CheckRadioGroup/Item'

const mockDefaultProps: ItemProps = {
  activeColor: '#990033',
  label: 'My mocked label.',
  value: 'my_value',
}

describe('Question/CheckRadioGroup/Item component', () => {
  it('passes a11y test', async () => {
    await testA11y(<Item {...mockDefaultProps} />)
  })

  it('renders correctly as checkbox element', () => {
    const { getByLabelText } = render(<Item {...mockDefaultProps} inputType="checkbox" />)
    expect(getByLabelText(mockDefaultProps.label)).toHaveAttribute('type', 'checkbox')
  })

  it('renders correctly as radio element', () => {
    const { getByLabelText } = render(<Item {...mockDefaultProps} inputType="radio" />)
    expect(getByLabelText(mockDefaultProps.label)).toHaveAttribute('type', 'radio')
  })

  it('renders a `FaCheck` icon if it is a `checkbox` element a `isChecked` is truthy', () => {
    const { getByTestId } = render(<Item {...mockDefaultProps} inputType="checkbox" isChecked />)
    expect(getByTestId('FaCheck')).toBeInTheDocument()
  })

  it('renders a `IoSquareOutline` icon if it is a `checkbox` element a `isChecked` is falsy', () => {
    const { getByTestId } = render(<Item {...mockDefaultProps} inputType="checkbox" />)
    expect(getByTestId('IoSquareOutline')).toBeInTheDocument()
  })

  it('renders a `IoEllipse` icon if it is a `radio` element a `isChecked` is truthy', () => {
    const { getByTestId } = render(<Item {...mockDefaultProps} inputType="radio" isChecked />)
    expect(getByTestId('IoEllipse')).toBeInTheDocument()
  })

  it('renders a `IoRadioButtonOff` icon if it is a `radio` element a `isChecked` is falsy', () => {
    const { getByTestId } = render(<Item {...mockDefaultProps} inputType="radio" />)
    expect(getByTestId('IoRadioButtonOff')).toBeInTheDocument()
  })

  it('renders with images', () => {
    const { getByTestId, queryByAltText } = render(<Item {...mockDefaultProps} withImages />)
    expect(getByTestId('ItemGroup')).toContainElement(queryByAltText(mockDefaultProps.label))
  })

  it('renders the group styles correctly when `withImages` is falsy', () => {
    const { getByTestId } = render(<Item {...mockDefaultProps} />)
    const testContainer = getByTestId('ItemGroup')
    expect(testContainer).toHaveStyleRule('flex-direction', 'initial')
    expect(testContainer).toHaveStyleRule('align-items', 'center')
  })

  it('renders the group styles correctly when `withImages` is truthy', () => {
    const { getByTestId } = render(<Item {...mockDefaultProps} withImages />)
    const testContainer = getByTestId('ItemGroup')
    expect(testContainer).toHaveStyleRule('flex-direction', 'column')
    expect(testContainer).toHaveStyleRule('align-items', 'center')
  })

  it('renders the label correctly `withLabels` is truthy and `withImages` falsy', () => {
    const { getByTestId } = render(<Item {...mockDefaultProps} withLabels />)
    const testContainer = getByTestId('Item').lastChild
    expect(testContainer).toHaveStyleRule('flex-grow', '1')
    expect(testContainer).toContainHTML(mockDefaultProps.label)
  })

  it('renders the label correctly `withLabels` and `withImages` are truthy', () => {
    const { getByTestId } = render(<Item {...mockDefaultProps} withLabels withImages />)
    const testContainer = getByTestId('ItemGroup').lastChild
    expect(testContainer).toHaveStyleRule('display', 'flex')
    expect(testContainer).toContainHTML(mockDefaultProps.label)
  })
})
