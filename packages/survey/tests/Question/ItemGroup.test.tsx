import { render, testA11y } from '@easyfeedback/test-utils'

import { ItemGroup, ItemGroupProps } from '../../src'

describe('ItemGroup component', () => {
  const props: ItemGroupProps = {
    name: 'group_name',
    type: 'checkbox',
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

  it('passes a11y test', async () => {
    await testA11y(<ItemGroup {...props} />)
  })

  it('renders correctly', () => {
    const { getByTestId } = render(<ItemGroup {...props} />)
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })
})
