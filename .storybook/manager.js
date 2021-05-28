import { configureActions } from '@storybook/addon-actions'
import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'React UI Library',
    brandUrl: 'https://github.com/easyfeedback/RCL',
    brandImage: './ef-logo-short.svg?sanitize=true',
  }),
})

configureActions({
  depth: 5,
  limit: 5,
})
