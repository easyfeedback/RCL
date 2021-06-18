import {
  Avatar,
  Badge,
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import { SettingsMenuButton, SettingsMenuButtonProps } from '@easyfeedback/buttons'
import dayjs from 'dayjs'
import { IoTimerOutline } from 'react-icons/io5'

import { ViewsStats, ViewsStatsProps } from './utils'

const getFormattedDate = (date: string) => dayjs(date).format('DD.MM.YYYY | HH:mm')

type Creator = { name: string; imageSrc?: string }

export type TemplateRowCardProps = {
  /** The hyperlink to the template. */
  href: string
  /** The title of the template. */
  title: string
  /** The image src attribute. */
  imageSrc: string
  /** All the tags to display. */
  tags?: string[]
  /** The time of the last edit. */
  editedAt: string
  /** The starting time of the survey. */
  startTime: string
  /** The ending time of the survey. */
  endTime?: string
  /** The creator of the template. */
  creator?: Creator
} & Pick<SettingsMenuButtonProps, 'menuItems'> &
  Pick<ViewsStatsProps, 'views'>

// TODO: Add mobile styles after the designer added them

/**
 * `TemplateRowCard` is a component for displaying the informations, stats and preview of the
 * available templates.
 */
export const TemplateRowCard = ({
  href,
  title,
  imageSrc,
  tags,
  editedAt,
  startTime,
  endTime,
  creator,
  views,
  menuItems,
}: TemplateRowCardProps) => {
  return (
    <Flex
      p="2"
      borderWidth="1px"
      borderColor="gray.300"
      borderRadius="base"
      w="full"
      data-testid="TemplateRowCard"
    >
      <HStack spacing="6">
        <Link href={href} title={title}>
          <Image
            src={imageSrc}
            alt={title}
            boxSize="3.5rem"
            objectFit="cover"
            borderRadius="base"
          />
        </Link>

        <VStack alignItems="flex-start">
          <HStack>
            <Heading size="sm">
              <Link href={href}>{title}</Link>
            </Heading>

            {tags && (
              <HStack data-testid="tags">
                {tags.map((tag, index) => (
                  <Badge key={index} colorScheme="green">
                    {tag}
                  </Badge>
                ))}
              </HStack>
            )}
          </HStack>

          <HStack spacing="14" color="gray.700" fontSize="sm" lineHeight="5">
            <Box fontWeight="bold">
              <Icon as={IoTimerOutline} w="4" h="4" />
              <Text as="span" pl="1" verticalAlign="text-top">
                {getFormattedDate(editedAt)}
              </Text>
            </Box>
            <Box data-testid="times">
              <Text as="span" fontWeight="black">
                {/* TODO: Add I18N */}
                Start:
              </Text>{' '}
              {getFormattedDate(startTime)} &ndash;{' '}
              <Text as="span" fontWeight="black">
                End:
              </Text>{' '}
              {endTime ? getFormattedDate(endTime) : 'Unlimited'}
            </Box>
          </HStack>
        </VStack>
      </HStack>

      <Spacer minW="8" />

      <HStack spacing="4" color="gray.700">
        {creator && <Avatar src={creator.imageSrc} title={creator.name} size="sm" />}
        {views && <ViewsStats views={views} />}
        <SettingsMenuButton menuItems={menuItems} fontSize="lg" />
      </HStack>
    </Flex>
  )
}
