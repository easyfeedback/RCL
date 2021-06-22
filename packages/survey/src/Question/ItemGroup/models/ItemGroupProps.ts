import { UseCheckboxGroupProps, UseRadioGroupProps } from '@chakra-ui/react'
import { ItemProps, OptionObj } from '../../Item'

export type ItemGroupProps = {
  /* An array with all available options for the group component */
  options: OptionObj[]
  /* The direction how the group component should be rendered */
  direction?: 'vertical' | 'horizontal'
  /* The max columns to set (when images are used) */
  maxColumns?: number
} & Pick<ItemProps, 'itemType' | 'activeColor' | 'withLabels' | 'withImages'> &
  Pick<UseRadioGroupProps, 'name' | 'defaultValue' | 'onChange'> &
  Pick<UseCheckboxGroupProps, 'defaultValue' | 'onChange'>
