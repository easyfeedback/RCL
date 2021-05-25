module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest/dist',
  },
  modulePathIgnorePatterns: ['<rootDir>/storybook-static', '<rootDir>/tools'],
  coveragePathIgnorePatterns: ['<rootDir>/storybook-static', '<rootDir>/tools'],
  setupFilesAfterEnv: ['./config/jest-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
