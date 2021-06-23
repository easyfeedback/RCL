import { Box, Flex, Icon, Image, Text, useCheckbox, useRadio } from '@chakra-ui/react'
import { ChangeEvent } from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoEllipse, IoRadioButtonOff, IoSquareOutline } from 'react-icons/io5'
import { IconType } from 'react-icons/lib'
import { v1 as uuid } from 'uuid'

import { useColors } from './hooks/useColors'
import { Option } from './models/Item'

export type ItemProps = {
  /** The input type to use. */
  itemType: 'checkbox' | 'radio'
  /** The color used if the input element is checked. */
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
  itemType = 'checkbox',
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
    itemType === 'radio' ? useRadio(props) : useCheckbox(props)
  const input = getInputProps()
  const labelProps = getLabelProps()
  const checkbox = getCheckboxProps()

  const { bgColor, hoverActiveColor, hoverColor, textColor, textActiveColor } =
    useColors(activeColor)

  const label_uid = uuid()

  const IconComponent = ({ icon }: { icon: IconType }) => (
    <Icon as={icon} display="block" mb={2} flexGrow={2} objectFit="scale-down" />
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

      <Flex
        {...checkbox}
        userSelect="none"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        p={4}
        direction={withImages ? 'column' : 'initial'}
        align={withImages ? 'initial' : 'center'}
        bgColor={bgColor}
        color={textColor}
        _checked={{ bgColor: activeColor, color: textActiveColor }}
        data-testid="ItemRow"
      >
        {withImages && <Image src={imageSrc} alt={label} />}

        <Flex align="flex-end">
          {itemType === 'radio' ? (
            <IconComponent icon={isChecked ? IoEllipse : IoRadioButtonOff} />
          ) : (
            <IconComponent icon={isChecked ? FaCheck : IoSquareOutline} />
          )}
          {withLabels && withImages && <Text ml={1}>{label}</Text>}
        </Flex>
      </Flex>

      {withLabels && !withImages && (
        <Box {...checkbox} ml={1} flexGrow={1}>
          <Text ml={1}>{label}</Text>
        </Box>
      )}
    </Flex>
  )
}
