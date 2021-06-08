# Theme

The default theme package for the easyfeedback components.

In the Theme object, you define your application's color palette, font size, font stacks,
breakpoints, border radius values, and more.

- [Installation](#installation)
- [General usage](#general-usage)
- [Usage with Next.js](#usage-with-nextjs)

## Installation

```sh
yarn add @fontsource/lato @easyfeedback/theme
```

## General usage

> You don't need to worry about the usage in this library.\
> All the necessary settings have been set in the storyboard.

To use this default theme, you need to extend the Chakra theme in your project.

For more detailed information see the
[Chakra Customize Theme doc](https://chakra-ui.com/docs/theming/customize-theme).

```tsx
// 1. Import `Lato` font and `theme`
import '@fontsource/lato'
import { theme } from '@easyfeedback/theme'

// 2. Pass the new `theme` to `ChakraProvider`
function MyApp() {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}

// 3. Now you can use these colors in your components
const Usage = () => {
  return <Box fontSize="2xs">Welcome</Box>
}
```

## Usage with Next.js

Chakra exposes the `ChakraProvider` component, which wraps your website with a context containing
the Chakra theme, color mode functionality, CSS reset, global styles, and more.

Use it in `pages/_app.js`:

```tsx
import '@fontsource/lato'
import { extendTheme } from '@chakra-ui/react'
import { theme } from '@easyfeedback/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
```
