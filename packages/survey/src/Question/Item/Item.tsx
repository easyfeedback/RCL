import {
  Box,
  useRadio,
  useCheckbox,
  UseRadioGroupReturn,
  UseCheckboxGroupReturn,
} from '@chakra-ui/react'
import { ItemGroupProps } from '../ItemGroup'
import { itemStyle } from './style'
import { Radio } from '../Item/Radio'
import { Checkbox } from '../Item/Checkbox'

type ItemProps = {
  index?: number
  label: string
  isChecked: boolean
} & Pick<ItemGroupProps, 'activeColor' | 'type' | 'withLabels'> &
  Pick<UseRadioGroupReturn, 'getRadioProps'> &
  Pick<UseCheckboxGroupReturn, 'getCheckboxProps'>

export const Item = (props: ItemProps) => {
  const { getInputProps, getLabelProps, getCheckboxProps } =
    props.type === 'radio' ? useRadio(props) : useCheckbox(props)

  const input = getInputProps()
  const label = getLabelProps()
  const checkbox = getCheckboxProps()

  const _itemStyle = itemStyle(props)

  const label_id = `aria-label_` + props.index

  return (
    <Box as="label" id={label_id} {...label} __css={_itemStyle}>
      <input {...input} title={props.label} aria-label={props.label} aria-labelledby={label_id} />
      <Box {...checkbox}>
        {props.type === 'radio' ? (
          <Radio isChecked={props.isChecked} />
        ) : (
          <Checkbox isChecked={props.isChecked} />
        )}
      </Box>
      {props.withLabels && (
        <Box {...checkbox} marginLeft={1} flexGrow={1}>
          {props.label}
        </Box>
      )}
    </Box>
  )
}
