import { Box, Flex, Icon, Image, Text, useCheckbox, useRadio } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoEllipse, IoRadioButtonOff, IoSquareOutline } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'
import { v1 as uuid } from 'uuid'

import { useColors } from './hooks'
import { Option } from './models/Item'
import { getItemGroupStyles } from './styles'

export type ItemProps = {
  /** The `type` of the input element. */
  inputType?: 'checkbox' | 'radio'
  /** The `color` used if the input element is checked. */
  activeColor: string
  /** If `true`, the `checkbox` / `radio` element will be checked. Use `onChange` to update its value */
  isChecked?: boolean
  /** Function called when checked state of the `input` changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** If `true`, the label will be rendered. */
  withLabels?: boolean
  /** If `true`, the images be rendered. */
  withImages?: boolean
} & Option

export const Item = ({
  activeColor,
  inputType = 'checkbox',
  withImages = false,
  withLabels = false,
  value,
  label,
  imageSrc,
  isChecked,
  onChange,
}: ItemProps) => {
  const props = { isChecked, value, onChange }
  const { getInputProps, getLabelProps, getCheckboxProps } =
    inputType === 'radio' ? useRadio(props) : useCheckbox(props)
  const input = getInputProps()
  const labelProps = getLabelProps()
  const checkbox = getCheckboxProps()

  const { bgColor, hoverActiveColor, hoverColor, textColor, textActiveColor } =
    useColors(activeColor)

  // TODO set uuid as props else create uuid on the fly
  const [label_uid] = useState(uuid())

  const itemGroupStyles = getItemGroupStyles({
    isChecked,
    activeColor,
    withImages,
    withLabels,
    bgColor,
    textColor,
    textActiveColor,
  })

  const IconComponent = ({ icon }: { icon: IconType }) => (
    <Icon as={icon} display="block" data-testid={icon.name} />
  )

  return (
    <Flex
      as="label"
      id={label_uid}
      {...labelProps}
      _hover={{ '& > div': { backgroundColor: isChecked ? hoverActiveColor : hoverColor } }}
      data-testid="Item"
    >
      <input {...input} aria-label={label} aria-labelledby={label_uid} />

      {/* TODO focus style missing (use like hover?) */}
      <Flex {...checkbox} __css={itemGroupStyles} data-testid="ItemGroup">
        {withImages && (
          <Image src={imageSrc} alt={label} mb={2} flexGrow={2} objectFit="scale-down" />
        )}

        <Flex alignItems={'flex-end'}>
          {inputType === 'radio' ? (
            <IconComponent icon={isChecked ? IoEllipse : IoRadioButtonOff} />
          ) : (
            <IconComponent icon={isChecked ? FaCheck : IoSquareOutline} />
          )}
          {withLabels && withImages && <Text ml={1}>{label}</Text>}
        </Flex>
      </Flex>

      {/* TODO focus style missing (use like hover?) */}
      {withLabels && !withImages && (
        <Box {...checkbox} __css={itemGroupStyles} ml={1} flexGrow={1}>
          <Text>{label}</Text>
        </Box>
      )}
    </Flex>
  )
}
