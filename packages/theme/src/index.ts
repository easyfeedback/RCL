import { extendTheme, theme as baseTheme, withDefaultColorScheme } from '@chakra-ui/react'

import { colors, fonts, fontSizes } from './foundations'
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

export default theme
