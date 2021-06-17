import { render, testA11y } from '@easyfeedback/test-utils'

import { ItemGroup, ItemGroupProps } from '../../src'

const mockDefaultProps: ItemGroupProps = {
  name: 'group_name',
  itemType: 'checkbox',
  activeColor: '#990033',
  options: [
    {
      label: 'Value 1',
      value: 'val1',
    },
    {
      label: 'Value 2',
      value: 'val2',
    },
    {
      label: 'Value 3',
      value: 'val3',
    },
  ],
  direction: 'vertical',
  withLabels: false,
}

describe('ItemGroup component', () => {
  it('passes a11y test', async () => {
    await testA11y(<ItemGroup {...mockDefaultProps} />)
  })

  it('renders correctly', () => {
    const { getByTestId } = render(<ItemGroup {...mockDefaultProps} />)
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })
})
