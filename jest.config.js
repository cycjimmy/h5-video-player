export default {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
  },
  // `npm run package` writes a copy of this package into `.release`. Without
  // these ignores Jest reports a haste module naming collision for the
  // duplicated package.json and walks generated files it should not touch.
  modulePathIgnorePatterns: [
    '<rootDir>/.release/',
    '<rootDir>/.publish/',
    '<rootDir>/dist/',
  ],
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
}
