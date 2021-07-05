import { Box, HStack } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { IconButton, IconButtonProps } from '../src/IconButton'

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  args: {
    ariaLabel: 'New survey',
  },
} as Meta

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Default = Template.bind({})

export const Sizes = () => (
  <Box>
    <HStack justifyContent="center">
      <IconButton ariaLabel="New survey small" size="sm" />
      <IconButton ariaLabel="New survey large" size="lg" />
    </HStack>
  </Box>
)

export const Icons = () => (
  <Box>
    <HStack justifyContent="center">
      <IconButton ariaLabel="New survey Add Icon" iconVariant="add" />
      <IconButton ariaLabel="New survey Help Icon" iconVariant="help" />
      <IconButton ariaLabel="New survey Search Icon" iconVariant="search" />
    </HStack>
  </Box>
)

export const Variants = () => (
  <Box>
    <HStack justifyContent="center">
      <IconButton ariaLabel="New survey Outline Variant" variant="outline" />
      <IconButton ariaLabel="New survey Solid Variant" variant="solid" />
      <IconButton ariaLabel="New survey Ghost Variant" variant="ghost" />
      <IconButton ariaLabel="New survey Unstyled Variant" variant="unstyled" />
    </HStack>
  </Box>
)
