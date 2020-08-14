module.exports = {
  name: 'server',
  displayName: 'server',
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  testEnvironment: 'node',
  rootDir: '../../',
  testMatch: [
    '<rootDir>/server/tests/*.jsx',
  ],
  coverageDirectory: '<rootDir>/server/tests/coverage',
};
