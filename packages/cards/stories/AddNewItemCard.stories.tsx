import { Meta, Story } from '@storybook/react/types-6-0'

import { AddNewItemCard, AddNewItemCardProps } from '../src/AddNewItemCard'

export default {
  title: 'Components/Cards/AddNewItemCard',
  component: AddNewItemCard,
  args: {
    label: 'New survey',
    variant: 'add',
  },
} as Meta

const Template: Story<AddNewItemCardProps> = (args) => <AddNewItemCard {...args} />

export const Default = Template.bind({})

export const WithClickEvent = Template.bind({})
WithClickEvent.args = {
  onClick: () => alert('New Item added!'),
}
