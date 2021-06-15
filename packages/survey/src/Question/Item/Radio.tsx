import { Icon, UseRadioProps } from '@chakra-ui/react'
import { IoEllipse, IoRadioButtonOff } from 'react-icons/io5'

export const Radio = ({ isChecked }: UseRadioProps) => {
  return <Icon as={isChecked ? IoEllipse : IoRadioButtonOff} display="block" />
}
