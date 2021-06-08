import { theme } from '@chakra-ui/react'

/**
 * Please ensure to add the `Lato` font to the project.
 *
 * @see https://chakra-ui.com/guides/using-fonts
 */
export const fonts = {
  ...theme.fonts,
  heading: `Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  body: `Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
}

export const fontSizes = {
  ...theme.fontSizes,
  '2xs': '0.625rem',
}
