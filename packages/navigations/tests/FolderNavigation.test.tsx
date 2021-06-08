import { render, testA11y } from '@easyfeedback/test-utils'

import { FolderNavigation, FolderNavigationProps } from '../src'

const mockDefaultProps: FolderNavigationProps = {
  folderList: [
    { id: '1', numberOfItems: 10, title: 'My Surveys', href: '#' },
    { id: '8', numberOfItems: 3, title: 'Marketing', href: '#' },
    { id: '4', numberOfItems: 1, title: 'Master templates (ALL)', href: '#' },
    { id: '9', numberOfItems: 2, title: 'Personnel and purchasing', href: '#' },
  ],
}

describe('FolderNavigation component', () => {
  it('passes a11y test', async () => {
    await testA11y(<FolderNavigation {...mockDefaultProps} />)
  })

  it('renders correctly', () => {
    const { getByTestId } = render(<FolderNavigation {...mockDefaultProps} />)
    expect(getByTestId('FolderNavigation')).toBeTruthy()
  })
})
