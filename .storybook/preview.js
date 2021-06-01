import '@fontsource/lato'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@easyfeedback/theme'
import React from 'react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [{ name: 'light', value: '#EFEFEF' }],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
