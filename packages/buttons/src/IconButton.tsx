import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
  Icon,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaPlus, FaQuestion, FaSearch } from 'react-icons/fa'

export type IconButtonProps = {
  /** A11y: A label that describes the button. */
  ariaLabel: string
  /** The size of the button. */
  size?: 'sm' | 'lg'
  /** The icon variant to render. */
  iconVariant?: 'add' | 'help' | 'search'
  /** The variant of the styling. */
  variant?: 'outline' | 'solid' | 'ghost' | 'unstyled'
} & Pick<ChakraIconButtonProps, 'colorScheme' | 'onClick'>

/**
 * `IconButton` composes the Button component except that it renders only an icon.
 *
 * Since `IconButton` only renders an icon, you must pass the `ariaLabel` prop, so screen readers
 * can give meaning to the `button`.
 */
export const IconButton = ({
  ariaLabel,
  size = 'lg',
  iconVariant = 'add',
  variant = 'solid',
  colorScheme = 'teal',
  onClick,
}: IconButtonProps) => {
  const [icon, setIcon] = useState<JSX.Element>()

  useEffect(() => {
    const getIcon = () => {
      switch (iconVariant) {
        case 'add':
          return <Icon as={FaPlus} data-testid="FaPlus" />
        case 'help':
          return <Icon as={FaQuestion} data-testid="FaQuestion" />
        case 'search':
          return <Icon as={FaSearch} data-testid="FaSearch" />
      }
    }
    setIcon(getIcon())
  }, [iconVariant])

  return (
    <ChakraIconButton
      colorScheme={colorScheme}
      variant={variant}
      aria-label={ariaLabel}
      size={size === 'lg' ? 'lg' : 'xs'}
      fontSize={size === 'lg' ? '2xl' : 'xs'}
      {...(icon ? { icon: icon } : {})}
      isRound
      onClick={onClick}
      data-testid="IconButton"
    />
  )
}
