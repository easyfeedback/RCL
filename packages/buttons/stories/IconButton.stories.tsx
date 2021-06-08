import { Meta, Story } from '@storybook/react/types-6-0'

import { IconButton, IconButtonProps } from '../src/IconButton'

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  args: {
    ariaLabel: 'New survey',
    size: 'lg',
    variant: 'add',
  },
} as Meta

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Default = Template.bind({})

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 'sm',
}

export const WithClickEvent = Template.bind({})
WithClickEvent.args = {
  variant: 'add',
  onClick: () => alert('Button clicked!'),
}
