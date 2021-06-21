module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest/dist',
  },
  modulePathIgnorePatterns: ['<rootDir>/docs-build', '<rootDir>/tools'],
  testPathIgnorePatterns: ['<rootDir>/packages/*/dist'],
  coveragePathIgnorePatterns: [
    '<rootDir>/docs-build',
    '<rootDir>/tools',
    '<rootDir>/packages/*/dist',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
