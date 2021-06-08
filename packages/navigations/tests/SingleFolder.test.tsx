import { render, testA11y, userEvent } from '@easyfeedback/test-utils'

import { SingleFolder, SingleFolderProps } from '../src/FolderNavigation/SingleFolder'

const mockDefaultProps: SingleFolderProps = {
  folder: { id: '1', numberOfItems: 10, title: 'My Surveys', href: '#' },
}

describe('SingleFolder component', () => {
  it('passes a11y test', async () => {
    await testA11y(<SingleFolder {...mockDefaultProps} />)
  })

  it('renders the circle with the number of items', () => {
    const { getByTestId } = render(<SingleFolder {...mockDefaultProps} />)
    expect(getByTestId('circle')).toContainHTML('10')
  })

  it('renders the circle with the placeholder "…"', () => {
    const { getByTestId } = render(
      <SingleFolder folder={{ id: '1', numberOfItems: 1000, title: 'My Surveys', href: '#' }} />
    )
    expect(getByTestId('circle')).toContainHTML('…')
  })

  it('renders the `MenuButton` in transparent as default', () => {
    const { getByTestId } = render(<SingleFolder {...mockDefaultProps} />)
    expect(getByTestId('MenuButton')).toHaveStyleRule('color', 'transparent')
  })

  it('renders the `MenuButton` in black at hovering', () => {
    const { getByTestId } = render(<SingleFolder {...mockDefaultProps} />)
    userEvent.hover(getByTestId('SingleFolder'))
    expect(getByTestId('MenuButton')).toHaveStyleRule('color', 'black')
  })

  it('renders the `MenuButton` in transparent after hover and unhover', () => {
    const { getByTestId } = render(<SingleFolder {...mockDefaultProps} />)
    const container = getByTestId('SingleFolder')
    const menuButton = getByTestId('MenuButton')

    userEvent.hover(container)
    expect(menuButton).toHaveStyleRule('color', 'black')

    userEvent.unhover(container)
    expect(menuButton).toHaveStyleRule('color', 'transparent')
  })
})
