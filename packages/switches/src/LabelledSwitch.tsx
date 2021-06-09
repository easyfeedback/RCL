import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import { toKebabCase } from '@easyfeedback/utils'

import { SwitchProps } from './Switch'

/**
 * The Switch component is used as an alternative for the Checkbox component. You can switch between
 * enabled or disabled states.
 *
 * The option that the switch controls, as well as the state it’s in, should be made clear from the
 * corresponding label, which also will display the description.
 */
export const LabelledSwitch = ({ id, label, labelPlacement, ...other }: SwitchProps) => {
  const htmlForId = id || toKebabCase(label)

  return (
    <FormControl display="flex" alignItems="center">
      {labelPlacement === 'start' && (
        <FormLabel htmlFor={htmlForId} mb={0}>
          {label}
        </FormLabel>
      )}
      <Switch {...other} id={htmlForId} data-testid="LabelledSwitch" />
      {labelPlacement === 'end' && (
        <FormLabel htmlFor={htmlForId} mb={0} marginInlineStart={3} marginInlineEnd={0}>
          {label}
        </FormLabel>
      )}
    </FormControl>
  )
}
