import {
  MenuButton as ChakraMenuButton,
  ColorProps,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { IoEllipsisVertical } from 'react-icons/io5'

import { MenuListItem } from './models/MenuListItem'

export type MenuButtonProps = {
  /** The list of menu items. */
  menuItems: MenuListItem[]
  /** The color of the `IoEllipsisVertical` icon. */
  color?: ColorProps['color']
  /** The size of the `IoEllipsisVertical` icon. */
  fontSize?: 'sm' | 'md' | 'lg'
}

/**
 * An accessible dropdown menu for the common dropdown menu button design pattern. `Menu` uses
 * roving `tabIndex` for focus management.
 *
 * This special `Menu` is set with the `IoEllipsisVertical` icon.
 */
export const MenuButton = ({ color, fontSize = 'md', menuItems }: MenuButtonProps) => {
  return (
    <Menu>
      <ChakraMenuButton
        as={IconButton}
        aria-label="Options"
        icon={<Icon as={IoEllipsisVertical} />}
        variant="unstyled"
        color={color}
        fontSize={fontSize}
        data-testid="MenuButton"
      />

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
