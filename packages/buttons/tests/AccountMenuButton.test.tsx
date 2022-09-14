/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, testA11y } from '@easyfeedback/test-utils'
import { IoPeopleOutline, IoPersonCircleOutline } from 'react-icons/io5'

import { AccountMenuButton, MenuListItem } from '../src'

const mockMenuItems: MenuListItem[] = [
  { icon: IoPersonCircleOutline, title: 'Account data ' },
  { icon: IoPeopleOutline, title: 'User management', color: 'red.500' },
]
const mockedName = 'John Doe'

const component = <AccountMenuButton name={mockedName} menuItems={mockMenuItems} />

describe('AccountMenuButton component', () => {
  it('passes a11y test', async () => {
    await testA11y(component)
  })

  it('renders the initials from the name if no avatarSrc is set', () => {
    const { getByLabelText } = render(component)
    expect(getByLabelText(mockedName)).toHaveTextContent('JD')
  })

  it('renders the name if showName is set to `true`', () => {
    const { getByTestId } = render(
      <AccountMenuButton name="John Doe" showName menuItems={mockMenuItems} />
    )
    expect(getByTestId('showName')).toHaveTextContent('John Doe')
  })

  it('renders in the small size', () => {
    const { getByTestId } = render(
      <AccountMenuButton name="John Doe" menuItems={mockMenuItems} size="sm" />
    )
    expect(getByTestId('AccountMenuButton')).toHaveStyle('height: var(--chakra-sizes-8)')
  })

  it('renders in the large size', () => {
    const { getByTestId } = render(
      <AccountMenuButton name="John Doe" menuItems={mockMenuItems} size="lg" />
    )
    expect(getByTestId('AccountMenuButton')).toHaveStyle('height: var(--chakra-sizes-12)')
  })

  it('renders the first `MenuItem` in the default color', () => {
    const { getAllByTestId, getByTestId } = render(component)
    fireEvent.click(getByTestId('AccountMenuButton')) // the `MenuItem` are loaded lazy at click
    expect(getAllByTestId('MenuItem')[0]).toHaveStyle('color: ButtonText')
  })

  it('not renders the second `MenuItem` in the default color', () => {
    const { getAllByTestId, getByTestId } = render(component)
    fireEvent.click(getByTestId('AccountMenuButton')) // the `MenuItem` are loaded lazy at click
    expect(getAllByTestId('MenuItem')[1]).not.toHaveStyleRule('color', 'gray.900')
  })
})
