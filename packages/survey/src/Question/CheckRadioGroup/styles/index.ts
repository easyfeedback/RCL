import { CSSObject } from '@chakra-ui/react'

export type ItemStylesProps = {
  isChecked?: boolean
  activeColor: string
  withImages?: boolean
  withLabels?: boolean
  bgColor: string
  textActiveColor: string
  textColor: string
}

export const getItemGroupStyles = ({
  isChecked,
  activeColor,
  withImages,
  withLabels,
  bgColor,
  textColor,
  textActiveColor,
}: ItemStylesProps): CSSObject => ({
  userSelect: 'none',
  cursor: 'pointer',
  borderWidth: '1px',
  borderRadius: 'md',
  padding: '4',
  display: 'flex',
  flexDirection: withImages ? 'column' : 'initial',
  alignItems: withLabels && withImages ? 'normal' : 'center',
  backgroundColor: isChecked ? activeColor : bgColor,
  color: isChecked ? textActiveColor : textColor,
})
