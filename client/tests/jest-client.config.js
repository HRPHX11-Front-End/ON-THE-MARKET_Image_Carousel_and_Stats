module.exports = {
  name: 'client',
  displayName: 'client',
  coverageReporters: ['json', 'html'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  rootDir: '../../',
  testMatch: [
    '<rootDir>/client/tests/*.jsx',
  ],
  coverageDirectory: '<rootDir>/client/tests/coverage',
};
