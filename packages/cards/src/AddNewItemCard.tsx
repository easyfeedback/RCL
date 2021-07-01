import { Center, Text } from '@chakra-ui/react'
import { IconButton, IconButtonProps } from '@easyfeedback/buttons'

export type AddNewItemCardProps = {
  /** The label of the component. */
  label: string
} & Partial<Pick<IconButtonProps, 'iconVariant' | 'onClick'>>

/** `AddNewItemCard` is a Card component for adding a new item. */
export const AddNewItemCard = ({ label, onClick, iconVariant = 'add' }: AddNewItemCardProps) => {
  return (
    <Center
      as="article"
      flexDir="column"
      w="220px"
      h="250px"
      rounded="base"
      // TODO: Maybe we have to use a SVG or Gradients for the border
      borderStyle="dashed"
      borderWidth="3px"
      borderColor="gray.300"
      data-testid="AddNewItemCard"
    >
      <IconButton ariaLabel={label} iconVariant={iconVariant} onClick={onClick} />
      <Text fontSize="sm" fontWeight="bold" align="center" mt="1rem">
        {label}
      </Text>
    </Center>
  )
}
