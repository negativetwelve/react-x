module.exports = {
  rootDir: '../',
  preset: 'jest-preset-jolt',
  moduleFileExtensions: ['js', 'dom.js'],
  moduleNameMapper: {
    '\\.(css|less|sass)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.dom.js',

  // TODO(mark): This should be 'jsdom' except enzyme is requiring react-dom < 16.
  // This causes everything to fail. Tracking issue is:
  // https://github.com/airbnb/enzyme/issues/928
  testEnvironment: 'node',
  testMatch: ['**/?(*.)spec.js', '**/?(*.)spec.dom.js'],
};
