import { Center, HStack, LinkBox, LinkOverlay, Spacer } from '@chakra-ui/layout'
import { MenuButton } from '@easyfeedback/buttons'
import { MenuListItem } from '@easyfeedback/buttons'
import { MouseEventHandler, useEffect, useState } from 'react'
import { IoSettings, IoTrashBinOutline } from 'react-icons/io5'

import { Folder } from './models/Folder'
import { animatedUnderline } from './styles'

export type SingleFolderProps = {
  /** The current folder. */
  folder: Folder
  /** The function with the information what happens when the button "Settings" is clicked. */
  onEditSettings?: MouseEventHandler<HTMLButtonElement>
  /** The function with the information what happens when the button "Delete" is clicked. */
  onDeleteFolder?: MouseEventHandler<HTMLButtonElement>
}

/** The single folder item. */
export const SingleFolder = ({ folder, onEditSettings, onDeleteFolder }: SingleFolderProps) => {
  const [isShownMenuButton, setIsShownMenuButton] = useState(false)
  const [menuItems, setMenuItems] = useState<MenuListItem[]>([])

  useEffect(() => {
    setMenuItems([
      { icon: IoSettings, title: 'Settings', onClick: onEditSettings },
      { icon: IoTrashBinOutline, title: 'Delete', onClick: onDeleteFolder, color: 'red.500' },
    ])
  }, [])

  const handleHover = (isHovering: boolean) => setIsShownMenuButton(isHovering)

  return (
    <LinkBox
      w="full"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      data-testid="SingleFolder"
    >
      <HStack spacing={3} h="10">
        <Center
          title={`${folder.numberOfItems}`}
          w="6"
          h="6"
          backgroundColor="black"
          color="white"
          rounded="full"
          fontSize="2xs"
          cursor="pointer"
          data-testid="circle"
        >
          {folder.numberOfItems > 999 ? '…' : folder.numberOfItems}
        </Center>

        <LinkOverlay
          href={folder.href}
          title={folder.title}
          isTruncated
          display="inline-block"
          maxW="13rem"
          borderBottom="3px solid transparent"
          fontSize="lg"
          transform="translateY(3px)"
          transition="border-bottom-color .2s, font-weight .2s"
          _hover={{ fontWeight: 'bold' }}
          sx={animatedUnderline}
        >
          {folder.title}
        </LinkOverlay>

        <Spacer />

        <MenuButton
          color={isShownMenuButton ? 'black' : 'transparent'}
          fontSize="lg"
          menuItems={menuItems}
        />
      </HStack>
    </LinkBox>
  )
}
