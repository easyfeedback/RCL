/**
 * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 * @param stringToConvert The string to convert.
 * @returns The kebab cased string.
 * @example
 * toKebabCase('camelCase')                    // => 'camel-case'
 * toKebabCase('some text')                    // => 'some-text'
 * toKebabCase('AllThe-small Things_together') // => 'all-the-small-thing-together'
 */
export const toKebabCase = (stringToConvert: string) => {
  const matcher = stringToConvert.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  )

  if (!matcher) return ''

  return matcher.map((part) => part.toLowerCase()).join('-')
}
