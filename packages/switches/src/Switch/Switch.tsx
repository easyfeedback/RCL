import { ThemingProps } from '@chakra-ui/react'

import { LabelledSwitch } from './LabelledSwitch'
import { SimpleSwitch } from './SimpleSwitch'

export type SwitchProps = {
  /** The color scheme of the switch. */
  colorScheme?: ThemingProps['colorScheme']
  /** The id assigned to the input element. */
  id?: string
  /**
   * Defines the string that labels the checkbox element. Even if it is not displayed on the screen,
   * it is used in the `aria-label` attribute.
   */
  label: string
  /** The position of the label. */
  labelPlacement?: 'start' | 'end'
  /** The size of switch. */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * The Switch component is used as an alternative for the Checkbox component. You can switch between
 * enabled or disabled states.
 */
export const Switch = ({ ...all }: SwitchProps) => {
  return <>{{ ...all }.labelPlacement ? <LabelledSwitch {...all} /> : <SimpleSwitch {...all} />}</>
}
