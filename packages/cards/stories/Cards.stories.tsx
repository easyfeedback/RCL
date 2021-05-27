import { Center } from '@chakra-ui/layout'
import { Meta, Story } from '@storybook/react/types-6-0'

import {
  AddNewItemCard as AddNewItemCardComponent,
  AddNewItemCardProps,
} from '../src/AddNewItemCard'

export default {
  title: 'Components/Cards',
  component: AddNewItemCardComponent,
  args: {
    label: 'New survey',
    variant: 'add',
    onClick: () => alert('Add Button clicked!'),
  },
} as Meta

const Template: Story<AddNewItemCardProps> = (args) => (
  <Center>
    <AddNewItemCardComponent {...args} />
  </Center>
)

export const AddNewItemCard = Template.bind({})
