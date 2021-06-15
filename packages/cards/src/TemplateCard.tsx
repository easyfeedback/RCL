import { Box, HStack, Heading, Image, LinkBox, LinkOverlay, Text, theme } from '@chakra-ui/react'
import { SettingsMenuButton, SettingsMenuButtonProps } from '@easyfeedback/buttons'

import { StateDot, StateDotProps, ViewsStats, ViewsStatsProps } from './utils'

export type TemplateCardProps = {
  /** The hyperlink to the template. */
  href: string
  /** The title of the template. */
  title: string
  /** The image src attribute. */
  imageSrc: string
} & Pick<SettingsMenuButtonProps, 'menuItems'> &
  StateDotProps &
  Pick<ViewsStatsProps, 'views'>

const componentHeight = 250
const infoBoxHeight = 48
const imageHeight = componentHeight - infoBoxHeight

/** `TemplateCard` is a Card component for displaying the state, stats and preview of the available templates. */
export const TemplateCard = ({
  href,
  title,
  imageSrc,
  views,
  menuItems,
  state,
}: TemplateCardProps) => {
  return (
    <LinkBox
      as="article"
      w="220px"
      h={`${componentHeight}px`}
      boxShadow="lg"
      rounded="base"
      _hover={{ boxShadow: 'xl' }}
      data-testid="TemplateCard"
      title={title}
    >
      <Image
        src={imageSrc}
        alt={title}
        pos="absolute"
        top="0"
        right="0"
        bottom={`${infoBoxHeight}px`}
        left="0"
        objectFit="cover"
        borderTopRadius="base"
        zIndex="hide"
      />

      <Box pos="absolute" top="1" title="options" right="1" zIndex={theme.zIndices.docked + 1}>
        <SettingsMenuButton color="white" menuItems={menuItems} />
      </Box>

      <Box
        bgColor="rgba(0,0,0,0.6)"
        h={`${imageHeight}px`}
        px="4"
        pt="10"
        pb="8"
        borderTopRadius="base"
      >
        <Heading size="base" fontWeight="normal" color="white">
          <LinkOverlay href={href}>
            <Text noOfLines={3}>{title}</Text>
            {/* space for Labels/Tags here */}
          </LinkOverlay>
        </Heading>
      </Box>

      <HStack
        bgColor="white"
        color="gray.700"
        height={`${infoBoxHeight}px`}
        justifyContent="space-between"
        px="4"
        borderBottomRadius="base"
      >
        <StateDot state={state} />

        {views && <ViewsStats views={views} fontSize="sm" iconSize="3" />}
      </HStack>
    </LinkBox>
  )
}
