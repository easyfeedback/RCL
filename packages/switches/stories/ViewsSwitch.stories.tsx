import { Meta, Story } from '@storybook/react/types-6-0'

import { ViewsSwitch } from '../src/ViewsSwitch'

export default {
  title: 'Components/Switches/ViewsSwitch',
  component: ViewsSwitch,
  args: {},
} as Meta

const Template: Story = (args) => <ViewsSwitch {...args} />

export const Default = Template.bind({})
