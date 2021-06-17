import { ReactNode } from 'react'

export type OptionObj = {
  /* the value */
  value: string
  /* label we should display (if selected) */
  label: string
  /* image to show */
  imageSrc?: string
}

export type ItemProps = {
  /* the color used when checked is true */
  activeColor: string
  /* chakra controlled value */
  isChecked?: boolean
  /* show or hide labels */
  withLabels: boolean
  /* nodes to add inside normal item */
  children?: ReactNode
} & Pick<OptionObj, 'value' | 'label' | 'imageSrc'>
