import { Icon, UseCheckboxProps } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'
import { IoSquareOutline } from 'react-icons/io5'

export const Checkbox = ({ isChecked }: UseCheckboxProps) => {
  return <Icon as={isChecked ? FaCheck : IoSquareOutline} display="block" />
}
