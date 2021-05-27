import { Center } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { IconButton as IconButtonComponent, IconButtonProps } from '../src/IconButton'

export default {
  title: 'Components/Buttons',
  component: IconButtonComponent,
  args: {
    ariaLabel: 'New survey',
    variant: 'plane',
    onClick: () => alert('Button clicked!'),
  },
} as Meta

const Template: Story<IconButtonProps> = (args) => (
  <Center>
    <IconButtonComponent {...args} />
  </Center>
)

export const IconButton = Template.bind({})
