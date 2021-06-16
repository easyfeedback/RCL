import { Meta, Story } from '@storybook/react/types-6-0'
import {
  IoDuplicateOutline,
  IoMove,
  IoPencil,
  IoPricetagOutline,
  IoTrashBinOutline,
} from 'react-icons/io5'

import { SettingsMenuButton, SettingsMenuButtonProps } from '../src/SettingsMenuButton'

export default {
  title: 'Components/Buttons/SettingsMenuButton',
  component: SettingsMenuButton,
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

const Template: Story<SettingsMenuButtonProps> = (args) => <SettingsMenuButton {...args} />

export const Default = Template.bind({})
