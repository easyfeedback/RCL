import { ItemGroupProps } from '../ItemGroup'

type ItemGroupStyleProps = Pick<ItemGroupProps, 'direction' | 'withLabels'>

export const itemGroupStyle = ({ direction }: ItemGroupStyleProps): CSSObject => {
  return {
    display: 'flex',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    '>:not(:last-child)': direction === 'vertical' ? { marginBottom: '1' } : { marginRight: '1' },
  }
}
