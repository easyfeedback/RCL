import { Box, useCheckboxGroup, useRadioGroup } from '@chakra-ui/react'

import { Item } from '../Item'
import { ItemProps, OptionObj } from '../Item/models/ItemProps'
import { ItemGroupProps } from './'
import { itemGroupStyle } from './style'

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
      {props.options.map(({ value, label, imageSrc }: OptionObj) => {
        const htmlProps =
          itemType === 'radio' ? getRadioProps({ value }) : getCheckboxProps({ value })

        const itemProps: ItemProps = {
          value,
          label,
          imageSrc,
          itemType: props.itemType,
          withLabels: props.withLabels,
          withImages: props.withImages,
          activeColor: props.activeColor,
        }

        return <Item key={value} {...htmlProps} {...itemProps} />
      })}
    </Box>
  )
}
