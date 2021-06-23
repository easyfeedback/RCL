import { render, testA11y } from '@easyfeedback/test-utils'
import { Item, ItemProps } from '../../src/Question/Item'

const mockDefaultProps: ItemProps = {
  activeColor: '#990033',
  itemType: 'checkbox',
  label: 'Alpha',
  value: 'A',
  withImages: false,
  withLabels: true,
  isChecked: false,
}

describe('Item component', () => {
  it('passes a11y test', async () => {
    await testA11y(<Item {...mockDefaultProps} />)
  })

  it('renders correctly', () => {
    const { getByTestId } = render(<Item {...mockDefaultProps} />)
    expect(getByTestId('Item')).toBeTruthy()
  })

  it('is checkbox', () => {
    const { queryByTestId } = render(<Item {...mockDefaultProps} />)
    expect(queryByTestId('ItemIconCheckbox')).toBeTruthy()
  })

  it('is radio', () => {
    const { queryByTestId } = render(<Item {...mockDefaultProps} itemType={'radio'} />)
    expect(queryByTestId('ItemIconRadio')).toBeTruthy()
  })

  it('with images', () => {
    const { queryByTestId } = render(<Item {...mockDefaultProps} withImages={true} />)
    expect(queryByTestId('ItemImage')).toBeTruthy()
  })

  it('with images', () => {
    const { queryByTestId } = render(<Item {...mockDefaultProps} withImages={true} />)
    expect(queryByTestId('ItemImage')).toBeTruthy()
  })

  it('with images and labels', () => {
    const { queryByTestId } = render(
      <Item {...mockDefaultProps} withImages={true} withLabels={true} />
    )
    expect(queryByTestId('ItemImage')).toBeTruthy()
    expect(queryByTestId('ItemImageLabel')).toBeTruthy()
  })

  it('with labels', () => {
    const { queryByTestId } = render(<Item {...mockDefaultProps} withLabels={true} />)
    expect(queryByTestId('ItemLabelWrapper')).toBeTruthy()
  })
})
