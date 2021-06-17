import { Box } from '@chakra-ui/react'
import { ItemProps } from './models/ItemProps'

import { itemStyle } from './style'

export const Item = (props: ItemProps) => {
  const _itemStyle = itemStyle(props)

  return <Box __css={_itemStyle}>{props.children}</Box>
}
