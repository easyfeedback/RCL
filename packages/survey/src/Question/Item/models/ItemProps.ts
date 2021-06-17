import { ReactNode } from 'react'

export type OptionObj = {
  value: string
  label: string
}

export type ItemProps = {
  activeColor: string
  isChecked?: boolean
  withLabels: boolean
  children?: ReactNode
} & Pick<OptionObj, 'value' | 'label'>
