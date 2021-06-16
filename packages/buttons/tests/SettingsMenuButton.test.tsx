import { fireEvent, render, testA11y } from '@easyfeedback/test-utils'
import { IoDuplicateOutline, IoTrashBinOutline } from 'react-icons/io5'

import { MenuListItem, SettingsMenuButton } from '../src'

const mockMenuItems: MenuListItem[] = [
  { icon: IoDuplicateOutline, title: 'Duplicate' },
  { icon: IoTrashBinOutline, title: 'Delete', color: 'red.500' },
]

const component = <SettingsMenuButton menuItems={mockMenuItems} />

describe('SettingsMenuButton component', () => {
  it('passes a11y test', async () => {
    await testA11y(component)
  })

  it('renders the first `MenuItem` in the default color', () => {
    const { getAllByTestId, getByTestId } = render(component)
    fireEvent.click(getByTestId('SettingsMenuButton')) // the `MenuItem` are loaded lazy at click
    expect(getAllByTestId('MenuItem')[0]).toHaveStyleRule('color', 'gray.900')
  })

  it('not renders the second `MenuItem` in the default color', () => {
    const { getAllByTestId, getByTestId } = render(component)
    fireEvent.click(getByTestId('SettingsMenuButton')) // the `MenuItem` are loaded lazy at click
    expect(getAllByTestId('MenuItem')[1]).not.toHaveStyleRule('color', 'gray.900')
  })
})
