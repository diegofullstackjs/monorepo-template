// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require('./package.json');

module.exports = {
  displayName: name,
  name,
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
