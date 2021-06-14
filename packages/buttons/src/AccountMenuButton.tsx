import {
  Avatar,
  Box,
  Button,
  MenuButton as ChakraMenuButton,
  ColorProps,
  Icon,
  Menu,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

import { MenuListItem } from './models/MenuListItem'

export type AccountMenuButtonProps = {
  /** The name of the person of the account. */
  name: string
  /** If `true`, the name will be displayed next to the avatar. */
  showName?: boolean
  /**
   * The image url of the Avatar. If `avatarSrc` is not set or can't loaded, the `name` will be used
   * to create the initials.
   */
  avatarSrc?: string
  /** The list of menu items. */
  menuItems: MenuListItem[]
  /** The color of the users avatar and name. */
  color?: ColorProps['color']
  /** The size of the users avatar and name. */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * An accessible dropdown menu for the common dropdown menu button design pattern. `Menu` uses
 * roving `tabIndex` for focus management.
 *
 * This special `AccountMenu` is set with a users avatar and name.
 */
export const AccountMenuButton = ({
  name,
  showName = false,
  avatarSrc,
  menuItems,
  color,
  size = 'md',
}: AccountMenuButtonProps) => {
  const [avatarSize, setAvatarSize] = useState('sm')

  useEffect(() => {
    switch (size) {
      case 'sm':
        setAvatarSize('xs')
        break
      case 'md':
        setAvatarSize('sm')
        break
      case 'lg':
        setAvatarSize('md')
        break
    }
  }, [size, avatarSize])

  return (
    <Menu isLazy>
      <ChakraMenuButton
        as={Button}
        rightIcon={<Icon as={IoChevronDown} />}
        variant="unstyled"
        color={color}
        size={size}
        display="inline-flex"
        alignItems="center"
        sx={{ '& > span': { display: 'inline-flex', alignItems: 'center' } }}
        data-testid="AccountMenuButton"
      >
        <Avatar name={name} src={avatarSrc} size={avatarSize} />
        {showName && (
          <Box as="span" ml="2" fontWeight="bold" data-testid="showName">
            {name}
          </Box>
        )}
      </ChakraMenuButton>

      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={<Icon as={item.icon} />}
            onClick={item.onClick}
            color={item.color || 'gray.900'}
            data-testid="MenuItem"
          >
            {item.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
