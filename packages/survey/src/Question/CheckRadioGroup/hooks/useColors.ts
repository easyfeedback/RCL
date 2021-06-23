import { useColorModeValue, useTheme } from '@chakra-ui/react'
import { darken, isDark, lighten, transparentize } from '@chakra-ui/theme-tools'

export const useColors = (activeColor: string) => {
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
  const textActiveColor = isDark(activeColor)(theme) ? 'white' : 'black'

  return { bgColor, hoverColor, hoverActiveColor, textColor, textActiveColor }
}
