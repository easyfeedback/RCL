import { render, testA11y } from '@easyfeedback/test-utils'

import { CheckRadioGroup, CheckRadioGroupProps } from '../../src'

const mockDefaultProps: CheckRadioGroupProps = {
  options: [{ value: 'my_value', label: 'My mocked label.' }],
  activeColor: '#990033',
}

describe('Question/CheckRadioGroup component', () => {
  it('passes a11y test', async () => {
    await testA11y(<CheckRadioGroup {...mockDefaultProps} />)
  })

  it('renders correctly as radio element', () => {
    const { getByLabelText } = render(<CheckRadioGroup {...mockDefaultProps} inputType="radio" />)
    expect(getByLabelText(mockDefaultProps.options[0].label)).toHaveAttribute('type', 'radio')
  })

  it('renders correctly as checkbox element', () => {
    const { getByLabelText } = render(
      <CheckRadioGroup {...mockDefaultProps} inputType="checkbox" />
    )
    expect(getByLabelText(mockDefaultProps.options[0].label)).toHaveAttribute('type', 'checkbox')
  })

  it('render correct `display` style if `maxColumns` is not set', () => {
    const { getByTestId } = render(<CheckRadioGroup {...mockDefaultProps} />)
    expect(getByTestId(/CheckRadioGroup/i)).toHaveStyleRule('display', 'flex')
  })

  it('render correct `display` style if `maxColumns` is set', () => {
    const { getByTestId } = render(<CheckRadioGroup {...mockDefaultProps} maxColumns={1} />)
    expect(getByTestId(/CheckRadioGroup/i)).toHaveStyleRule('display', 'grid')
  })

  it('render correct `flexDirection` style if `direction` is set to `horizontal`', () => {
    const { getByTestId } = render(<CheckRadioGroup {...mockDefaultProps} direction="horizontal" />)
    expect(getByTestId(/CheckRadioGroup/i)).toHaveStyleRule('flex-direction', 'row')
  })

  it('render correct `flexDirection` style if `direction` is set to `vertical`', () => {
    const { getByTestId } = render(<CheckRadioGroup {...mockDefaultProps} direction="vertical" />)
    expect(getByTestId(/CheckRadioGroup/i)).toHaveStyleRule('flex-direction', 'column')
  })
})
