import { theme as baseTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { colors, fontSizes, fonts } from './foundations'
import { styles } from './styles'

export * from './hooks'

export const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'gray' }), {
  ...baseTheme,
  colors,
  fonts,
  fontSizes,
  styles,
})

export type ThemeProps = typeof theme
