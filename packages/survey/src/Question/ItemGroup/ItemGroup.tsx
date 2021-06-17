import {
  Box,
  UseCheckboxGroupProps,
  UseRadioGroupProps,
  useCheckboxGroup,
  useRadioGroup,
} from '@chakra-ui/react'

import { Radio, Checkbox, ItemProps, OptionObj } from '../Item'
import { itemGroupStyle } from './style'

export type ItemGroupProps = {
  itemType: 'checkbox' | 'radio'
  options: OptionObj[]
  direction?: 'vertical' | 'horizontal'
} & Pick<ItemProps, 'activeColor' | 'withLabels'> &
  Pick<UseRadioGroupProps, 'name' | 'defaultValue' | 'onChange'> &
  Pick<UseCheckboxGroupProps, 'defaultValue' | 'onChange'>

export const ItemGroup = (props: ItemGroupProps) => {
  const { itemType } = props
  const defaultProps = {
    defaultValue: props.defaultValue,
    onChange: props.onChange,
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: props.name,
    ...defaultProps,
  })
  const { getCheckboxProps } = useCheckboxGroup(defaultProps)

  const groupStyle = itemGroupStyle(props)
  const rootProps = itemType === 'radio' ? getRootProps() : {}

  return (
    <Box data-testid="ItemGroup" {...rootProps} __css={groupStyle}>
      {props.options.map(({ value, label }) => {
        const itemProps = {
          key: value,
          value,
          label,
          withLabels: props.withLabels,
          activeColor: props.activeColor,
        }

        return itemType === 'radio' ? (
          <Radio {...getRadioProps({ value })} {...itemProps} />
        ) : (
          <Checkbox {...getCheckboxProps({ value })} {...itemProps} />
        )
      })}
    </Box>
  )
}
