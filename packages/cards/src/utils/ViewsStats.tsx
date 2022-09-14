import { ChakraProps, HStack, Icon, Text } from '@chakra-ui/react'
import { IoStatsChartSharp } from 'react-icons/io5'

export type ViewsStatsProps = {
  /** The number of views. */
  views?: number
  fontSize?: ChakraProps['fontSize']
  iconSize?: ChakraProps['h']
}

export const ViewsStats = ({ views, fontSize, iconSize }: ViewsStatsProps) => {
  return (
    <HStack data-testid="ViewsStats">
      <Text
        as="span"
        zIndex="docked"
        title={`${views}`}
        fontSize={fontSize}
        noOfLines={1}
        maxWidth={145}
      >
        {views}
      </Text>
      <Icon as={IoStatsChartSharp} title="survey stats" zIndex="docked" w={iconSize} h={iconSize} />
    </HStack>
  )
}
