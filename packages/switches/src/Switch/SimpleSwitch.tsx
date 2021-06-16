import { Switch } from '@chakra-ui/react'

import { SwitchProps } from './Switch'

/**
 * Switches are the preferred way to adjust settings.
 *
 * The option that the switch controls, as well as the state it’s in, should be made clear from the
 * corresponding inline label.
 */
export const SimpleSwitch = ({ label, ...other }: SwitchProps) => {
  return <Switch aria-label={label} {...other} data-testid="SimpleSwitch" />
}
