import { Meta, Story } from '@storybook/react/types-6-0'

import { {{filename}}, {{filename}}Props } from '../src/{{filename}}'

export default {
  title: 'Components/{{filename}}',
  component: {{filename}},
} as Meta

const Template: Story<{{filename}}Props> = (args) => <{{filename}} {...args} />

export const Default = Template.bind({})
