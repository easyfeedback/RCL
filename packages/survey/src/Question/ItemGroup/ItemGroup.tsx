import {
  Box,
  useRadioGroup,
  UseRadioGroupProps,
  useCheckboxGroup,
  UseCheckboxGroupProps,
} from '@chakra-ui/react'
import { Item } from '../Item'
import { itemGroupStyle } from './style'

type OptionObj = {
  value: string
  label: string
}

export type ItemGroupProps = {
  type: 'checkbox' | 'radio'
  activeColor?: string
  options: OptionObj[]
  direction?: 'vertical' | 'horizontal'
  withLabels: boolean
} & Pick<UseRadioGroupProps, 'name' | 'defaultValue' | 'onChange'> &
  Pick<UseCheckboxGroupProps, 'defaultValue' | 'onChange'>

export const ItemGroup = (props: ItemGroupProps) => {
  const { type } = props
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
  const rootProps = type === 'radio' ? getRootProps() : {}

  return (
    <Box data-testid="ItemGroup" {...rootProps} __css={groupStyle}>
      {props.options.map(({ value, label }, i) => {
        const itemProps = type === 'radio' ? getRadioProps({ value }) : getCheckboxProps({ value })

        return (
          <Item
            key={value}
            index={i}
            type={type}
            label={label}
            withLabels={props.withLabels}
            activeColor={props.activeColor}
            {...itemProps}
          />
        )
      })}
    </Box>
  )
}
