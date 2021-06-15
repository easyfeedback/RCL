import { Icon, UseCheckboxProps } from '@chakra-ui/react'
import { IoSquareOutline } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa'

export const Checkbox = ({ isChecked }: UseCheckboxProps) => {
  return <Icon as={isChecked ? FaCheck : IoSquareOutline} display="block" />
}
