import { Box, Icon, Image, Text, useCheckbox, useRadio } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'
import { IoEllipse, IoRadioButtonOff, IoSquareOutline } from 'react-icons/io5'
import { v1 as uuid } from 'uuid'

import { itemStyle } from './style'
import { ItemProps } from '.'

export const Item = (props: ItemProps) => {
  const { getInputProps, getLabelProps, getCheckboxProps } =
    props.itemType === 'radio' ? useRadio(props) : useCheckbox(props)

  const input = getInputProps()
  const label = getLabelProps()
  const checkbox = getCheckboxProps()

  const _itemStyle = itemStyle(props)

  const label_uid = uuid()

  return (
    <Box data-testid="Item" as="label" id={label_uid} {...label} __css={_itemStyle}>
      <input {...input} aria-label={props.label} aria-labelledby={label_uid} />
      <Box data-testid="ItemWrapper" {...checkbox}>
        {props.withImages && (
          <Image data-testid="ItemImage" src={props.imageSrc} alt={props.label} />
        )}
        <Box data-testid="ItemIconWrapper" display={'flex'} alignItems={'flex-end'}>
          {props.itemType === 'radio' ? (
            <Icon
              data-testid="ItemIconRadio"
              as={props.isChecked ? IoEllipse : IoRadioButtonOff}
              display="block"
            />
          ) : (
            <Icon
              data-testid="ItemIconCheckbox"
              as={props.isChecked ? FaCheck : IoSquareOutline}
              display="block"
            />
          )}
          {props.withLabels && props.withImages && (
            <Text data-testid="ItemImageLabel">{props.label}</Text>
          )}
        </Box>
      </Box>
      {props.withLabels && !props.withImages && (
        <Box data-testid="ItemLabelWrapper" {...checkbox} marginLeft={1} flexGrow={1}>
          <Text data-testid="ItemLabel">{props.label}</Text>
        </Box>
      )}
    </Box>
  )
}
