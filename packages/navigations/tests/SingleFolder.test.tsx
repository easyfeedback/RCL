import { render, testA11y, userEvent } from '@easyfeedback/test-utils'

import { SingleFolder, SingleFolderProps } from '../src/FolderNavigation/SingleFolder'

const mockDefaultProps: SingleFolderProps = {
  folder: { id: '1', numberOfItems: 10, title: 'My Surveys', href: '#' },
}

const component = <SingleFolder {...mockDefaultProps} />

describe('SingleFolder component', () => {
  it('passes a11y test', async () => {
    await testA11y(component)
  })

  it('renders the circle with the number of items', () => {
    const { getByTestId } = render(component)
    expect(getByTestId('circle')).toContainHTML('10')
  })

  it('renders the circle with the placeholder "…"', () => {
    const { getByTestId } = render(
      <SingleFolder folder={{ id: '1', numberOfItems: 1000, title: 'My Surveys', href: '#' }} />
    )
    expect(getByTestId('circle')).toContainHTML('…')
  })

  it('renders the `SettingsMenuButton` in transparent as default', () => {
    const { getByTestId } = render(component)
    expect(getByTestId('SettingsMenuButton')).toHaveStyleRule('color', 'transparent')
  })

  it('renders the `SettingsMenuButton` in black at hovering', () => {
    const { getByTestId } = render(component)
    userEvent.hover(getByTestId('SingleFolder'))
    expect(getByTestId('SettingsMenuButton')).toHaveStyleRule('color', 'black')
  })

  it('renders the `SettingsMenuButton` in transparent after hover and unhover', () => {
    const { getByTestId } = render(component)
    const container = getByTestId('SingleFolder')
    const SettingsMenuButton = getByTestId('SettingsMenuButton')

    userEvent.hover(container)
    expect(SettingsMenuButton).toHaveStyleRule('color', 'black')

    userEvent.unhover(container)
    expect(SettingsMenuButton).toHaveStyleRule('color', 'transparent')
  })
})
