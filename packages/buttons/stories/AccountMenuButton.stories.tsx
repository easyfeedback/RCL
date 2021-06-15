import { Box, Divider, HStack } from '@chakra-ui/layout'
import { Meta, Story } from '@storybook/react/types-6-0'
import {
  IoBuildOutline,
  IoHelpCircleOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonCircleOutline,
} from 'react-icons/io5'

import { AccountMenuButton, AccountMenuButtonProps } from '../src/AccountMenuButton'

const menuItems = [
  { icon: IoPersonCircleOutline, title: 'Account data' },
  { icon: IoPeopleOutline, title: 'User management' },
  { icon: IoBuildOutline, title: 'Settings' },
  { icon: IoHelpCircleOutline, title: 'Help' },
  { icon: IoLogOutOutline, title: 'Logout' },
]

const getUnsplashImage = (id: string) =>
  `https://images.unsplash.com/photo-${id}?fit=crop&w=64&h=64&q=60`

export default {
  title: 'Components/Buttons/AccountMenuButton',
  component: AccountMenuButton,
  args: {
    name: 'John Doe',
    menuItems,
  },
} as Meta

const Template: Story<AccountMenuButtonProps> = (args) => <AccountMenuButton {...args} />

export const Default = Template.bind({})
Default.args = {}

export const AvatarOnly = Template.bind({})
AvatarOnly.args = {
  avatarSrc: getUnsplashImage('1535713875002-d1d0cf377fde'),
}

export const AvatarAndName = Template.bind({})
AvatarAndName.args = {
  name: 'Jane Doe',
  showName: true,
  avatarSrc: getUnsplashImage('1607746882042-944635dfe10e'),
}

export const Sizes = () => (
  <Box>
    <HStack justifyContent="center">
      <AccountMenuButton name="John Doe" menuItems={menuItems} size="sm" />
      <AccountMenuButton name="John Doe" menuItems={menuItems} size="md" />
      <AccountMenuButton name="John Doe" menuItems={menuItems} size="lg" />
    </HStack>
    <Divider my="8" />
    <HStack justifyContent="center">
      <AccountMenuButton
        name="Jane Q. Citizen"
        showName
        avatarSrc={getUnsplashImage('1607746882042-944635dfe10e')}
        menuItems={menuItems}
        size="sm"
      />
      <AccountMenuButton
        name="John Doe"
        showName
        avatarSrc={getUnsplashImage('1535713875002-d1d0cf377fde')}
        menuItems={menuItems}
        size="md"
      />
      <AccountMenuButton
        name="Sally Sixpack"
        showName
        avatarSrc={getUnsplashImage('1569913486515-b74bf7751574')}
        menuItems={menuItems}
        size="lg"
      />
    </HStack>
  </Box>
)
