import { toKebabCase } from '../src'

describe('Converter - toKebabCase', () => {
  it('should return the input as `kebab-case`', () => {
    expect(toKebabCase('camelCase')).toBe('camel-case')
    expect(toKebabCase('some text')).toBe('some-text')
    expect(toKebabCase('AllThe-small Things')).toBe('all-the-small-things')
  })

  it('should return an empty string if the input is an empty string', () => {
    expect(toKebabCase('')).toBe('')
  })
})
