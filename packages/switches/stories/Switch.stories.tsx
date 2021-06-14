import { HStack } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Switch, SwitchProps } from '../src/Switch'

export default {
  title: 'Components/Switches/Switch',
  component: Switch,
  args: {
    label: 'My Label',
  },
} as Meta

const Template: Story<SwitchProps> = (args) => <Switch {...args} />

export const Default = Template.bind({})

export const Labels = () => (
  <HStack spacing="12">
    <Switch label="left labelled" labelPlacement="start" />
    <Switch label="right labelled" labelPlacement="end" />
  </HStack>
)

export const BlueColorScheme = () => <Switch label="blue" colorScheme="blue" />

export const Sizes = () => {
  return (
    <HStack spacing="12">
      <Switch label="sm" labelPlacement="end" size="sm" colorScheme="green" />
      <Switch label="md" labelPlacement="end" size="md" colorScheme="red" />
      <Switch label="lg" labelPlacement="end" size="lg" colorScheme="orange" />
    </HStack>
  )
}
