import '@fontsource/lato'

import {
  Center,
  ChakraProvider,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { StoryContext } from '@storybook/react'
import * as React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

import { theme } from '../packages/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

/** Add global context for RTL-LTR switching */
export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
}

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const nextMode = useColorModeValue('dark', 'light')

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals
  const dir = direction.toLowerCase()
  return (
    <ChakraProvider theme={{ ...theme, direction: dir }}>
      <div dir={dir} id="story-wrapper" style={{ margin: 'auto', maxWidth: '90%' }}>
        <ColorModeToggleBar />
        <Center my="16">
          <StoryFn />
        </Center>
      </div>
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
