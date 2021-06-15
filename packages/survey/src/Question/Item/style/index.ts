/* eslint-disable @typescript-eslint/no-explicit-any */
import { useColorModeValue, CSSObject } from '@chakra-ui/react'
import Color from 'color'
import { lightenAbs, darkenAbs } from '@easyfeedback/utils/src/color-ext'

type ItemStyleProps = {
  isChecked: boolean
  activeColor?: string
}

export const itemStyle = ({ isChecked, activeColor }: ItemStyleProps): CSSObject => {
  const Black = Color('black')
  const White = Color('white')
  const ActiveColor = Color(activeColor)

  const BgColor: Color = useColorModeValue(Black.alpha(0.12), White.alpha(0.29))
  const HoverColor: Color = useColorModeValue(Black.alpha(0.25), White.alpha(0.22))
  const HoverActiveColor = ActiveColor.isDark()
    ? lightenAbs(ActiveColor, 0.05)
    : darkenAbs(ActiveColor, 0.05)

  const TextColor = useColorModeValue(Black, White)
  const TextColorActive = ActiveColor.isLight() ? Black : White

  return {
    display: 'flex',
    div: {
      userSelect: 'none',
      cursor: 'pointer',
      borderWidth: '1px',
      borderRadius: 'md',
      padding: '4',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: isChecked ? ActiveColor.toString() : BgColor.toString(),
      color: isChecked ? TextColorActive.toString() : TextColor.toString(),
    },
    '&:hover > div': {
      backgroundColor: isChecked ? HoverActiveColor.toString() : HoverColor.toString(),
    },
  }
}
