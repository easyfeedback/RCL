import { fireEvent, render, testA11y } from '@easyfeedback/test-utils'

import { ItemGroup, ItemGroupProps } from '../../src'

const mockDefaultProps: ItemGroupProps = {
  itemType: 'checkbox',
  activeColor: '#990033',
  options: [
    {
      value: 'fox_dog',
      label: 'The quick brown fox jumps over the lazy dog',
    },
    {
      value: 'lorem',
      label:
        'Enim inventore aliquid neque voluptates. Ut dolorem saepe explicabo et eum beatae. Autem at voluptas aspernatur possimus consequatur. Eius inventore commodi et in perspiciatis inventore laborum. Beatae eius animi et facere suscipit laboriosam quaerat qui. Assumenda dolores ducimus modi earum rem qui illum.',
    },
    {
      value: 'value_3',
      label: 'Value 3',
    },
    {
      value: 'value_4',
      label: 'Value 4',
    },
  ],
  withLabels: false,
  withImages: false,
}

const optionsWithImages: ItemGroupProps['options'] = [
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
]

describe('ItemGroup component', () => {
  it('passes a11y test', async () => {
    await testA11y(<ItemGroup {...mockDefaultProps} />)
  })

  it('renders correctly as checkbox', () => {
    const { getAllByTestId } = render(<ItemGroup {...mockDefaultProps} />)
    expect(getAllByTestId('ItemIconCheckbox').length).toBe(4)
  })

  it('renders correctly as radio', () => {
    const { getAllByTestId } = render(<ItemGroup {...mockDefaultProps} itemType={'radio'} />)
    expect(getAllByTestId('ItemIconRadio').length).toBe(4)
  })

  it('renders correctly with labels', () => {
    const { getAllByTestId } = render(<ItemGroup {...mockDefaultProps} withLabels={true} />)
    expect(getAllByTestId('ItemLabelWrapper').length).toBe(4)
    expect(getAllByTestId('ItemLabel').length).toBe(4) // maybe not necessary
  })

  it('renders correctly vertically', () => {
    const { getByTestId } = render(<ItemGroup {...mockDefaultProps} direction={'vertical'} />)
    const itemGroup = getByTestId('ItemGroup')
    expect(itemGroup).toHaveStyle('flex-direction: column')
  })

  it('renders correctly horizontally', () => {
    const { getByTestId } = render(<ItemGroup {...mockDefaultProps} direction={'horizontal'} />)
    const itemGroup = getByTestId('ItemGroup')
    expect(itemGroup).toHaveStyle('flex-direction: row')
  })

  it('renders with images', () => {
    const { getAllByTestId } = render(
      <ItemGroup {...mockDefaultProps} {...optionsWithImages} withImages={true} />
    )
    expect(getAllByTestId('ItemImage').length).toBe(4)
  })

  it('renders with images and with labels', () => {
    const { getAllByTestId } = render(
      <ItemGroup {...mockDefaultProps} {...optionsWithImages} withImages={true} withLabels={true} />
    )
    expect(getAllByTestId('ItemImage').length).toBe(4)
    expect(getAllByTestId('ItemImageLabel').length).toBe(4)
  })

  it('renders with images, horizontal and max columns', () => {
    const { getAllByTestId } = render(
      <ItemGroup
        {...mockDefaultProps}
        {...optionsWithImages}
        withImages={true}
        direction={'horizontal'}
        maxColumns={3}
      />
    )
    expect(getAllByTestId('ItemImage').length).toBe(4)
  })

  it('renders with light active color', () => {
    const { getAllByTestId } = render(<ItemGroup {...mockDefaultProps} activeColor="#75e0f6" />)
    const itemWrapper = getAllByTestId('ItemWrapper')[0]
    fireEvent.click(itemWrapper)
    expect(itemWrapper).toHaveStyle('background-color: #75e0f6')
    expect(itemWrapper).toHaveStyle('color: black')
  })

  it('can be checked as checkbox', () => {
    const clickEvent = jest.fn()
    const { container } = render(<ItemGroup {...mockDefaultProps} onChange={clickEvent} />)

    const val = mockDefaultProps.options[1].value
    const item = container.querySelectorAll(`input[value="${val}"]`)

    if (item.length > 0) {
      fireEvent.click(item[0])
      expect(clickEvent).toBeCalledTimes(1)
    }

    const val2 = mockDefaultProps.options[2].value
    const item2 = container.querySelectorAll(`input[value="${val}"]`)

    if (val2.length > 0) {
      fireEvent.click(item2[0])
      expect(clickEvent).toBeCalledTimes(2)
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
      expect(clickEvent).toBeCalledTimes(1)
    }
  })
})
