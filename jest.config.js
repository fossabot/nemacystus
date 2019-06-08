module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: ['default', 'jest-junit'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.cache/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  verbose: true
}
