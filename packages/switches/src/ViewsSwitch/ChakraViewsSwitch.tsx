/*
  Pulled from the original Chakra Switch
  (https://github.com/chakra-ui/chakra-ui/blob/main/packages/switch/src/switch.tsx)
*/

import {
  HTMLChakraProps,
  Icon,
  SystemProps,
  SystemStyleObject,
  ThemingProps,
  UseCheckboxProps,
  chakra,
  forwardRef,
  omitThemingProps,
  useCheckbox,
} from '@chakra-ui/react'
import { cx, dataAttr } from '@chakra-ui/utils'
import { useMemo } from 'react'
import { IoGrid, IoMenu } from 'react-icons/io5'

import { styleContainer, styleListIcon, styleThumb, styleTileIcon, styleTrack } from './styles'

export interface ChakraViewsSwitchProps
  extends Omit<UseCheckboxProps, 'isIndeterminate'>,
    Omit<HTMLChakraProps<'label'>, keyof UseCheckboxProps>,
    ThemingProps<'Switch'> {
  spacing?: SystemProps['marginLeft']
}

export const ChakraViewsSwitch = forwardRef<ChakraViewsSwitchProps, 'input'>((props, ref) => {
  const { state, getInputProps, getCheckboxProps, getRootProps } = useCheckbox(
    omitThemingProps(props)
  )

  const trackStyles: SystemStyleObject = useMemo(() => styleTrack(props), [styleTrack(props)])

  const thumbStyles: SystemStyleObject = useMemo(
    () => styleThumb(state.isChecked),
    [styleThumb(state.isChecked)]
  )

  return (
    <chakra.label
      {...getRootProps()}
      className={cx('chakra-switch', props.className)}
      __css={styleContainer}
    >
      <input className="chakra-switch__input" {...getInputProps({}, ref)} />
      <chakra.span {...getCheckboxProps()} className="chakra-switch__track" __css={trackStyles}>
        <Icon as={IoGrid} w={5} h={5} __css={styleTileIcon} />

        <chakra.span
          __css={thumbStyles}
          className="chakra-switch__thumb"
          data-checked={dataAttr(state.isChecked)}
          data-hover={dataAttr(state.isHovered)}
        >
          {/* TODO: Add I18N to the text content */}
          {state.isChecked ? 'List' : 'Tiles'}
        </chakra.span>

        <Icon as={IoMenu} w={6} h={6} __css={styleListIcon} />
      </chakra.span>
    </chakra.label>
  )
})
