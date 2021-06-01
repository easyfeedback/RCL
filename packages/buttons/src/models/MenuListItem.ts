import { MouseEventHandler } from 'react'
import { IconType } from 'react-icons/lib'

export type MenuListItem = {
  icon: IconType
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  color?: string
}
