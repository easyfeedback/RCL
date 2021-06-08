import { theme as baseTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { colors, fontSizes, fonts } from './foundations'
import { styles } from './styles'

export const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'teal' }), {
  ...baseTheme,
  colors,
  fonts,
  fontSizes,
  styles,
})

export type ThemeProps = typeof theme
