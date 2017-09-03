module.exports = {
  rootDir: '../',
  preset: 'jest-preset-jolt',
  moduleFileExtensions: ['js', 'dom.js'],
  moduleNameMapper: {
    '\\.(css|less|sass)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.dom.js',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)spec.js', '**/?(*.)spec.dom.js'],
};
