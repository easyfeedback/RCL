import { ChangeEvent } from 'react'

import { ChakraViewsSwitch } from './ChakraViewsSwitch'

export type ViewsSwitchProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

/** With the `ViewsSwitch` it is possible to switch the view of the content between tiles and lists. */
export const ViewsSwitch = ({ ...all }: ViewsSwitchProps) => <ChakraViewsSwitch {...all} />
