import { Styles, mode } from '@chakra-ui/theme-tools'

export const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('black', 'whiteAlpha.900')(props),
      bg: mode('white', 'black')(props),
      transition: 'background-color 0.2s, color 0.2s',
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    // Accessibility
    '*:focus': {
      boxShadow: 'none !important',
    },
    '.user-is-tabbing *:focus': {
      boxShadow: 'var(--chakra-shadows-outline) !important',
    },
  }),
}
