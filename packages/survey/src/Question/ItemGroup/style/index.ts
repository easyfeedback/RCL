import { CSSObject } from '@chakra-ui/react'

import { ItemGroupProps } from '../'

export const itemGroupStyle = ({ direction, maxColumns }: ItemGroupProps): CSSObject => {
  return {
    display: maxColumns ? 'grid' : 'flex',
    gridAutoFlow: 'row',
    gridTemplateColumns: `repeat(${maxColumns}, 1fr)`,
    gridGap: '1',
    flexDirection: !maxColumns && direction === 'vertical' ? 'column' : 'row',
  }
}
