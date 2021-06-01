import { Meta, Story } from '@storybook/react/types-6-0'
import {
  IoDuplicateOutline,
  IoMove,
  IoPencil,
  IoPricetagOutline,
  IoTrashBinOutline,
} from 'react-icons/io5'

import { MenuButton, MenuButtonProps } from '../src/MenuButton'

export default {
  title: 'Components/Buttons/MenuButton',
  component: MenuButton,
  args: {
    menuItems: [
      { icon: IoDuplicateOutline, title: 'Duplicate' },
      { icon: IoMove, title: 'Move' },
      { icon: IoPricetagOutline, title: 'Assign tags' },
      { icon: IoPencil, title: 'Save as template' },
      { icon: IoTrashBinOutline, title: 'Delete', color: 'red.500' },
    ],
  },
} as Meta

const Template: Story<MenuButtonProps> = (args) => <MenuButton {...args} />

export const Default = Template.bind({})
