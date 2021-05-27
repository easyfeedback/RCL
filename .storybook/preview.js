import '@fontsource/lato'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@easyfeedback/theme'
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
