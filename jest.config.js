module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: { '^.+\\.tsx?$': ['ts-jest', { module: 'commonjs' }] },
  modulePathIgnorePatterns: [
    '<rootDir>/docs-build',
    '<rootDir>/tools',
    '<rootDir>/packages/*/dist',
  ],
  testPathIgnorePatterns: ['<rootDir>/packages/*/dist'],
  coveragePathIgnorePatterns: [
    '<rootDir>/docs-build',
    '<rootDir>/tools',
    '<rootDir>/packages/*/dist',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
