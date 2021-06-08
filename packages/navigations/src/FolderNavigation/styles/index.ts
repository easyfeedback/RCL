import { CSSObject } from '@chakra-ui/react'

export const animatedUnderline: CSSObject = {
  '&:after': {
    display: 'block',
    content: '""',
    borderBottom: 'solid 3px',
    transform: 'scaleX(0)',
    transition: 'transform 300ms ease-in-out',
    transformOrigin: '0% 50%',
  },
  '&:hover': {
    '&:after': {
      transform: 'scaleX(1)',
    },
  },
}
