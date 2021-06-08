import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
  Icon,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaPlane, FaPlus } from 'react-icons/fa'

export type IconButtonProps = {
  /** A11y: A label that describes the button. */
  ariaLabel: string
  /** The size of the button. */
  size?: 'sm' | 'lg'
  /**
   * The icon variant to render.
   *
   * @todo Remove `plane` after another icon was added
   */
  variant?: 'add' | 'plane'
} & Pick<ChakraIconButtonProps, 'onClick'>

/**
 * `IconButton` composes the Button component except that it renders only an icon.
 *
 * Since `IconButton` only renders an icon, you must pass the `ariaLabel` prop, so screen readers
 * can give meaning to the `button`.
 */
export const IconButton = ({
  ariaLabel,
  size = 'lg',
  variant = 'add',
  onClick,
}: IconButtonProps) => {
  const [icon, setIcon] = useState<JSX.Element>()

  useEffect(() => {
    const getIcon = () => {
      switch (variant) {
        case 'add':
          return <Icon as={FaPlus} data-testid="FaPlus" />
        // TODO: `Plane` is currently only a placeholder and will removed after another icon was added
        case 'plane':
          return <Icon as={FaPlane} data-testid="FaPlane" />
      }
    }
    setIcon(getIcon())
  }, [variant])

  return (
    <ChakraIconButton
      colorScheme="teal"
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
