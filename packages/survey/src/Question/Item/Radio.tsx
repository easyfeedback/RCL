import { Image, Box, Text, Icon, useRadio } from '@chakra-ui/react'
import { IoEllipse, IoRadioButtonOff } from 'react-icons/io5'
import { ItemProps } from './'
import { itemStyle } from './style'
import { v1 as uuid } from 'uuid'

export const Radio = (props: ItemProps) => {
  const { getInputProps, getLabelProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const label = getLabelProps()
  const checkbox = getCheckboxProps()

  const _itemStyle = itemStyle(props)

  const label_uid = uuid()

  return (
    <Box as="label" id={label_uid} {...label} __css={_itemStyle}>
      <input {...input} aria-label={props.label} aria-labelledby={label_uid} />
      <Box {...checkbox}>
        {props.imageSrc && <Image src={props.imageSrc} alt={props.label} />}
        <Box display={'flex'}>
          <Icon as={props.isChecked ? IoEllipse : IoRadioButtonOff} display="block" />
          {props.withLabels && props.imageSrc && <Text>{props.label}</Text>}
        </Box>
      </Box>
      {props.withLabels && !props.imageSrc && (
        <Box {...checkbox} marginLeft={1} flexGrow={1}>
          <Text>{props.label}</Text>
        </Box>
      )}
    </Box>
  )
}