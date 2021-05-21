import { configureActions } from '@storybook/addon-actions'
import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'dark',

    appContentBg: 'white',
    appBorderColor: 'silver',
    barBg: 'white',
    appBg: '#3e3e3e',

    textColor: 'rgba(211,211,211,1.9)',
    textInverseColor: 'rgba(211,211,211,1.9)',

    brandTitle: 'RCL',
    brandUrl: 'https://github.com/easyfeedback/RCL',
    brandImage:
      'https://github.com/easyfeedback/RCL/raw/main/.storybook/ef-logo-short.svg?sanitize=true',
  }),
})

configureActions({
  depth: 5,
  limit: 5,
})
