import { Icon, UseRadioProps } from '@chakra-ui/react'
import { IoRadioButtonOff, IoEllipse } from 'react-icons/io5'

export const Radio = ({ isChecked }: UseRadioProps) => {
  return <Icon as={isChecked ? IoEllipse : IoRadioButtonOff} display="block" />
}
