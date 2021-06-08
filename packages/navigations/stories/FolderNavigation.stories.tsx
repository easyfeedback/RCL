import { Meta, Story } from '@storybook/react/types-6-0'

import { FolderNavigation, FolderNavigationProps } from '../src/FolderNavigation'

export default {
  title: 'Components/Navigations/FolderNavigation',
  component: FolderNavigation,
  args: {
    folderList: [
      { id: '1', numberOfItems: 10, title: 'My Surveys', href: '#' },
      { id: '8', numberOfItems: 3, title: 'Marketing', href: '#' },
      { id: '4', numberOfItems: 1, title: 'Master templates (ALL)', href: '#' },
      { id: '2', numberOfItems: 2, title: 'Personnel and purchasing', href: '#' },
    ],
  },
} as Meta

const Template: Story<FolderNavigationProps> = (args) => <FolderNavigation {...args} />

export const Default = Template.bind({})

export const Limits = Template.bind({})
Limits.args = {
  folderList: [
    { id: '9', numberOfItems: 3, title: 'Marketing', href: '#' },
    {
      id: '100',
      numberOfItems: 12345,
      title:
        'Survey about something with users from the Application of state and democracy - inspired by rainbows and flowers',
      href: '#',
    },
  ],
}
