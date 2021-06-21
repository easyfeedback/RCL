import { fireEvent, render, testA11y } from '@easyfeedback/test-utils'

import { ItemGroup, ItemGroupProps } from '../../src'

const mockDefaultProps: ItemGroupProps = {
  name: 'group_name',
  itemType: 'checkbox',
  activeColor: '#990033',
  options: [
    {
      value: 'fox_dog',
      imageSrc:
        'https://images.unsplash.com/photo-1462953491269-9aff00919695?auto=format&fit=crop&w=634&q=80',
      label: 'The quick brown fox jumps over the lazy dog',
    },
    {
      value: 'lorem',
      imageSrc:
        'https://images.unsplash.com/photo-1623776051205-ab4b9e13e8b0?auto=format&fit=crop&w=659&q=80',
      label:
        'Enim inventore aliquid neque voluptates. Ut dolorem saepe explicabo et eum beatae. Autem at voluptas aspernatur possimus consequatur. Eius inventore commodi et in perspiciatis inventore laborum. Beatae eius animi et facere suscipit laboriosam quaerat qui. Assumenda dolores ducimus modi earum rem qui illum.',
    },
    {
      value: 'value_3',
      imageSrc: '',
      label: 'Value 3',
    },
    {
      value: 'value_4',
      imageSrc:
        'https://images.unsplash.com/photo-1532009877282-3340270e0529?&auto=format&fit=crop&w=1050&q=80',
      label: 'Value 4',
    },
  ],
  direction: 'vertical',
  withLabels: false,
  withImages: false,
}

describe('ItemGroup component', () => {
  it('passes a11y test', async () => {
    await testA11y(<ItemGroup {...mockDefaultProps} />)
  })

  it('renders correctly as checkbox', () => {
    const { getByTestId } = render(<ItemGroup {...mockDefaultProps} />)
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })

  it('renders correctly as checkbox', () => {
    const { getByTestId } = render(<ItemGroup {...mockDefaultProps} itemType={'radio'} />)
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })

  it('renders correctly with labels', () => {
    const { getByTestId } = render(<ItemGroup {...mockDefaultProps} withLabels={true} />)
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })

  it('renders correctly horizontally', () => {
    const { getByTestId } = render(<ItemGroup {...mockDefaultProps} direction={'horizontal'} />)
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })

  it('renders with images', () => {
    const { getByTestId } = render(<ItemGroup {...mockDefaultProps} withImages={true} />)
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })

  it('renders with images and with labels', () => {
    const { getByTestId } = render(
      <ItemGroup {...mockDefaultProps} withImages={true} withLabels={true} />
    )
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })

  it('renders with images, horizontal and max columns', () => {
    const { getByTestId } = render(
      <ItemGroup {...mockDefaultProps} withImages={true} direction={'horizontal'} maxColumns={3} />
    )
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })

  it('renders with light active color', () => {
    const { getByTestId } = render(<ItemGroup {...mockDefaultProps} activeColor={'#75e0f6'} />)
    expect(getByTestId('ItemGroup')).toBeTruthy()
  })

  it('can be checked as checkbox', () => {
    const clickEvent = jest.fn()
    const { container } = render(<ItemGroup {...mockDefaultProps} onChange={clickEvent} />)

    const val = mockDefaultProps.options[1].value
    const item = container.querySelectorAll(`input[value="${val}"]`)

    if (item.length > 0) {
      fireEvent.click(item[0])
      expect(clickEvent.mock.calls.length).toBe(1)
    }

    const val2 = mockDefaultProps.options[2].value
    const item2 = container.querySelectorAll(`input[value="${val}"]`)

    if (val2.length > 0) {
      fireEvent.click(item2[0])
      expect(clickEvent.mock.calls.length).toBe(2)
    }
  })

  it('can be checked as radio', () => {
    const clickEvent = jest.fn()
    const { container } = render(
      <ItemGroup {...mockDefaultProps} itemType={'radio'} onChange={clickEvent} />
    )

    const val = mockDefaultProps.options[1].value
    const item = container.querySelectorAll(`input[value="${val}"]`)

    if (item.length > 0) {
      fireEvent.click(item[0])
      expect(clickEvent.mock.calls.length).toBe(1)
    }
  })
})
