import { render, testA11y } from '@easyfeedback/test-utils'
import { IoDuplicateOutline, IoTrashBinOutline } from 'react-icons/io5'

import { MenuButton } from '../src'

const mockMenuItems = [
  { icon: IoDuplicateOutline, title: 'Duplicate' },
  { icon: IoTrashBinOutline, title: 'Delete', color: 'red.500' },
]

const component = <MenuButton menuItems={mockMenuItems} />

describe('MenuButton component', () => {
  it('passes a11y test', async () => {
    await testA11y(component)
  })

  it('renders the first `MenuItem` in the default color', () => {
    const { getAllByTestId } = render(component)
    expect(getAllByTestId('MenuItem')[0]).toHaveStyleRule('color', 'gray.900')
  })

  it('not renders the second `MenuItem` in the default color', () => {
    const { getAllByTestId } = render(component)
    expect(getAllByTestId('MenuItem')[1]).not.toHaveStyleRule('color', 'gray.900')
  })
})