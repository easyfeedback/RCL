import { Box } from '@chakra-ui/react'

export type StateDotProps = {
  /** The current state of the template. */
  state: 'initialized' | 'published' | 'paused' | 'closed'
}

export const StateDot = ({ state }: StateDotProps) => {
  const getValuesFromState = () => {
    let color
    let title
    switch (state) {
      case 'initialized':
        color = 'gray.500'
        title = 'initialized'
        break
      case 'paused':
        color = 'yellow.500'
        title = 'paused'
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
