import { Box, HStack, LinkBox, LinkOverlay, VStack } from '@chakra-ui/react'
import { IconButton } from '@easyfeedback/buttons'
import { MouseEventHandler } from 'react'

import { Folder } from './models/Folder'
import { SingleFolder, SingleFolderProps } from './SingleFolder'
import { animatedUnderline } from './styles'

export type FolderNavigationProps = {
  /** The list with all the folders the user has access to. */
  folderList: Folder[]
  /** The function with the information what happens when the button "Add new folder" is clicked. */
  onCreateNewFolder?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
} & Pick<SingleFolderProps, 'onDeleteFolder' | 'onEditSettings'>

/**
 * The side navigation for the folder overview.
 *
 * At the very top there is a button for creating a new folder. This is followed by all folders to
 * which the current user has access to.
 */
export const FolderNavigation = ({
  folderList,
  onCreateNewFolder,
  onDeleteFolder,
  onEditSettings,
}: FolderNavigationProps) => {
  return (
    <Box as="nav" w="xs" data-testid="FolderNavigation">
      <LinkBox>
        <HStack spacing={3} h="10">
          {/* TODO: Add I18N to the ariaLabel property and the text content */}
          <IconButton ariaLabel="Add a new Folder" size="sm" onClick={onCreateNewFolder} />

          <LinkOverlay
            as="button"
            onClick={onCreateNewFolder}
            fontSize="sm"
            fontWeight="bold"
            sx={animatedUnderline}
          >
            Add Folder
          </LinkOverlay>
        </HStack>
      </LinkBox>

      <VStack mt="10" spacing={1} alignItems="flex-start">
        {folderList.map((folder) => (
          <SingleFolder
            key={folder.id}
            folder={folder}
            onDeleteFolder={onDeleteFolder}
            onEditSettings={onEditSettings}
          />
        ))}
      </VStack>
    </Box>
  )
}
