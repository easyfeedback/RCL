/* eslint-disable @typescript-eslint/no-explicit-any */
import { useColorModeValue, CSSObject, useTheme } from '@chakra-ui/react'
import { isDark, lighten, darken, transparentize } from '@chakra-ui/theme-tools'
import { ItemProps } from '../models/ItemProps'

export const itemStyle = ({ isChecked, activeColor, imageSrc }: ItemProps): CSSObject => {
  const theme = useTheme()
  const bgColor = useColorModeValue(
    transparentize('black', 0.12)(theme),
    transparentize('white', 0.29)(theme)
  )
  const hoverColor = useColorModeValue(
    transparentize('black', 0.25)(theme),
    transparentize('white', 0.22)(theme)
  )
  const hoverActiveColor = isDark(activeColor)(theme)
    ? darken(activeColor, 0.05)(theme)
    : lighten(activeColor, 0.05)(theme)

  const textColor = useColorModeValue('black', 'white')
  const textColorActive = isDark(activeColor)(theme) ? 'white' : 'black'

  return {
    display: 'flex',
    '> div': {
      userSelect: 'none',
      cursor: 'pointer',
      borderWidth: '1px',
      borderRadius: 'md',
      padding: '4',
      display: 'flex',
      flexDirection: imageSrc ? 'column' : 'initial',
      alignItems: imageSrc ? 'normal' : 'center',
      backgroundColor: isChecked ? activeColor : bgColor,
      color: isChecked ? textColorActive : textColor,
      '> div > p': {
        marginLeft: '1',
      },
      '> img': {
        marginBottom: '2',
        flexGrow: 2,
        objectFit: 'cover',
      },
    },
    '&:hover > div': {
      backgroundColor: isChecked ? hoverActiveColor : hoverColor,
    },
  }
}
