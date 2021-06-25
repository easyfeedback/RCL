import { renderHook } from '@easyfeedback/test-utils'

import { useColors } from '../../src/Question/CheckRadioGroup/hooks'

describe('Question/CheckRadioGroup/useColors', () => {
  it('should have a lighter hoverActiveColor if activeColor is a dark color', () => {
    const { result } = renderHook(() => useColors('#e2b3c3'))
    expect(result.current.hoverActiveColor).toBe('#e9c5d2')
  })

  it('should have a darker hoverActiveColor if activeColor is a dark color', () => {
    const { result } = renderHook(() => useColors('#990033'))
    expect(result.current.hoverActiveColor).toBe('#80002a')
  })

  it('should have a black textActiveColor if activeColor is a light color', () => {
    const { result } = renderHook(() => useColors('#e2b3c3'))
    expect(result.current.textActiveColor).toBe('black')
  })

  it('should have a white textActiveColor if activeColor is a dark color', () => {
    const { result } = renderHook(() => useColors('#990033'))
    expect(result.current.textActiveColor).toBe('white')
  })

  // TODO: Add tests for all colors using `useColorModeValue` (Light / Dark Mode)
})
