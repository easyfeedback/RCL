const path = require('path')

const emotionReactPath = path.dirname(require.resolve('@emotion/react/package.json'))
const emotionStyledPath = path.dirname(require.resolve('@emotion/styled/package.json'))

module.exports = {
  stories: [
    '../packages/**/stories/*.stories.mdx',
    '../packages/**/stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-links',
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      // i: The `loose` option fixes output warnings of storybook
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
  }),
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': emotionReactPath,
          '@emotion/styled': emotionStyledPath,
          'emotion-theming': emotionReactPath,
        },
      },
    }
  },
}
