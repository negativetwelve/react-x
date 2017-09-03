module.exports = {
  preset: 'jest-preset-jolt',
  moduleFileExtensions: ['js', 'native.js'],
  setupTestFrameworkScriptFile: './setup.js',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)spec.js', '**/?(*.)spec.native.js'],
};
