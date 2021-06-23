import { fireEvent, render, testA11y } from '@easyfeedback/test-utils'

import { CheckRadioGroup, CheckRadioGroupProps } from '../../src'

const mockDefaultProps: CheckRadioGroupProps = {
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

describe('CheckRadioGroup component', () => {
  it('passes a11y test', async () => {
    await testA11y(<CheckRadioGroup {...mockDefaultProps} />)
  })

  it('renders correctly as checkbox', () => {
    const { getByTestId } = render(<CheckRadioGroup {...mockDefaultProps} />)
    expect(getByTestId(/CheckRadioGroup/i)).toBeTruthy()
  })

  it('renders correctly as checkbox', () => {
    const { getByTestId } = render(<CheckRadioGroup {...mockDefaultProps} itemType={'radio'} />)
    expect(getByTestId(/CheckRadioGroup/i)).toBeTruthy()
  })

  it('renders correctly with labels', () => {
    const { getByTestId } = render(<CheckRadioGroup {...mockDefaultProps} withLabels={true} />)
    expect(getByTestId(/CheckRadioGroup/i)).toBeTruthy()
  })

  it('renders correctly horizontally', () => {
    const { getByTestId } = render(
      <CheckRadioGroup {...mockDefaultProps} direction={'horizontal'} />
    )
    expect(getByTestId(/CheckRadioGroup/i)).toBeTruthy()
  })

  it('renders with images', () => {
    const { getByTestId, queryByAltText } = render(
      <CheckRadioGroup
        {...mockDefaultProps}
        withImages={true}
        options={[{ value: 'myValue', imageSrc: 'myImg', label: 'myLabel' }]}
      />
    )
    expect(getByTestId(/CheckRadioGroup/i)).toContainElement(queryByAltText('myLabel'))
  })

  it('renders with images and with labels', () => {
    const { getByTestId } = render(
      <CheckRadioGroup {...mockDefaultProps} withImages={true} withLabels={true} />
    )
    expect(getByTestId(/CheckRadioGroup/i)).toBeTruthy()
  })

  it('renders with images, horizontal and max columns', () => {
    const { getByTestId } = render(
      <CheckRadioGroup
        {...mockDefaultProps}
        withImages={true}
        direction={'horizontal'}
        maxColumns={3}
      />
    )
    expect(getByTestId(/CheckRadioGroup/i)).toBeTruthy()
  })

  it('renders with light active color', () => {
    // TODO: Add `data-testid="ItemRow"` to the `Item` component in the root element at line 24!
    const { getAllByTestId } = render(
      <CheckRadioGroup {...mockDefaultProps} activeColor="#75e0f6" />
    )
    const itemRow = getAllByTestId('ItemRow')[0]
    fireEvent.click(itemRow) // needed to check the checkbox and get the activeColor
    expect(itemRow).toHaveStyle('background-color: #75e0f6')
    expect(itemRow).toHaveStyle('color: black')
  })

  it('can be checked as checkbox', () => {
    const clickEvent = jest.fn()
    const { container } = render(<CheckRadioGroup {...mockDefaultProps} onChange={clickEvent} />)

    const val = mockDefaultProps.options[1].value
    const item = container.querySelectorAll(`input[value="${val}"]`)
    fireEvent.click(item[0])
    expect(clickEvent).toBeCalled()

    const val2 = mockDefaultProps.options[2].value
    const item2 = container.querySelectorAll(`input[value="${val2}"]`)
    fireEvent.click(item2[0])
    expect(clickEvent).toBeCalledTimes(2)
  })

  it('can be checked as radio', () => {
    const clickEvent = jest.fn()
    const { container } = render(
      <CheckRadioGroup {...mockDefaultProps} itemType="radio" onChange={clickEvent} />
    )

    const val = mockDefaultProps.options[1].value
    const item = container.querySelectorAll(`input[value="${val}"]`)
    fireEvent.click(item[0])
    expect(clickEvent).toBeCalled()
  })
})
