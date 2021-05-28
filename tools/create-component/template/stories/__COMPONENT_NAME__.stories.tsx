import { Center } from '@chakra-ui/layout'
import { Meta, Story } from '@storybook/react/types-6-0'

import { {{filename}}, {{filename}}Props } from '../src/{{filename}}'

export default {
  title: 'Components/{{filename}}',
  component: {{filename}},
  args: {},
} as Meta

const Template: Story<{{filename}}Props> = (args) => (
  <Center>
    <{{filename}} {...args} />
  </Center>
)

export const Default = Template.bind({})

export const WithClickEvent = Template.bind({})
WithClickEvent.args = {
  onClick: () => alert('Clicked!'),
}
