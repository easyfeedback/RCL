/* eslint-disable @typescript-eslint/no-explicit-any */

import { CSSObject } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

export const styleContainer: CSSObject = {
  '--slider-track-width': '9rem',
  '--slider-track-height': '2rem',
  '--slider-thumb-width': 'calc(var(--slider-track-width) / 3 * 2)',
  '--slider-track-diff': 'calc(var(--slider-track-width) - var(--slider-thumb-width))',
  '--slider-thumb-x': 'var(--slider-track-diff)',

  _rtl: {
    '--slider-thumb-x': 'calc(-1 * var(--slider-track-diff))',
  },

  display: 'inline-block',
  verticalAlign: 'middle',
  lineHeight: 'normal',
}

export const styleTrack = (props: Record<string, any>): CSSObject => {
  const { colorScheme: c } = props

  return {
    pos: 'absolute',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'space-between',
    boxSizing: 'content-box',
    cursor: 'pointer',
    borderRadius: 'full',
    p: '2px',
    width: 'var(--slider-track-width)',
    height: 'var(--slider-track-height)',
    transitionProperty: 'common',
    transitionDuration: 'fast',
    bg: mode('gray.300', 'whiteAlpha.400')(props),

    _focus: {
      boxShadow: 'outline',
    },

    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },

    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
    },
  }
}

export const styleThumb = (isChecked: boolean): CSSObject => ({
  display: 'flex',
  justifyContent: isChecked ? 'flex-start' : 'flex-end',
  alignItems: 'center',
  bg: 'white',
  transitionProperty: 'transform',
  transitionDuration: 'normal',
  borderRadius: 'inherit',
  width: 'var(--slider-thumb-width)',
  height: 'var(--slider-track-height)',
  pr: isChecked ? '10' : '4',
  pl: isChecked ? '4' : '10',

  _checked: {
    transform: 'translateX(var(--slider-thumb-x))',
  },
})

const styleIcon: CSSObject = {
  pos: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: '1',
}

export const styleTileIcon: CSSObject = {
  ...styleIcon,
  left: '4',
}

export const styleListIcon: CSSObject = {
  ...styleIcon,
  right: '4',
}
