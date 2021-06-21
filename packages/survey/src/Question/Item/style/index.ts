import { CSSObject, useColorModeValue, useTheme } from '@chakra-ui/react'
import { darken, isDark, lighten, transparentize } from '@chakra-ui/theme-tools'

import { ItemProps } from '../models/ItemProps'

export const itemStyle = ({ isChecked, activeColor, withImages }: ItemProps): CSSObject => {
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
      flexDirection: withImages ? 'column' : 'initial',
      alignItems: withImages ? 'normal' : 'center',
      backgroundColor: isChecked ? activeColor : bgColor,
      color: isChecked ? textColorActive : textColor,
      '> div > p': {
        marginLeft: '1',
      },
      '> img': {
        marginBottom: '2',
        flexGrow: 2,
        objectFit: 'scale-down',
      },
    },
    '&:hover > div': {
      backgroundColor: isChecked ? hoverActiveColor : hoverColor,
    },
  }
}
