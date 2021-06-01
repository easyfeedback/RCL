import { Box } from '@chakra-ui/react'

export type StateDotProps = {
  /** The current state of the template. */
  state: 'published' | 'planned' | 'closed'
}

export const StateDot = ({ state }: StateDotProps) => {
  const getValuesFromState = () => {
    let color
    let title
    switch (state) {
      // TODO: The cases are currently only a placeholder and have to change to its correct values
      case 'planned':
        color = 'yellow.500'
        title = 'planned'
        break
      case 'closed':
        color = 'red.500'
        title = 'closed'
        break
      case 'published':
        color = 'teal.500'
        title = 'published'
    }
    return { color, title }
  }

  return (
    <Box
      w="12px"
      h="12px"
      rounded="full"
      bgColor={getValuesFromState().color}
      title={getValuesFromState().title}
      zIndex="docked"
      data-testid="StateDot"
    />
  )
}
