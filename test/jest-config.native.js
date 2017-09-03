module.exports = {
  rootDir: '../',
  preset: 'jest-preset-jolt',
  moduleFileExtensions: ['js', 'native.js'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.native.js',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)spec.js', '**/?(*.)spec.native.js'],
};
