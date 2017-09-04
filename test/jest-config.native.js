module.exports = {
  rootDir: '../',
  preset: 'jest-preset-jolt',
  moduleFileExtensions: ['js', 'native.js'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.native.js',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)spec.js', '**/?(*.)spec.native.js'],
  transformIgnorePatterns: [
    // NOTE(mark): React Native and all packages must be compiled by babel in
    // order to work properly. This issue is being tracked:
    // https://github.com/facebook/react-native/issues/10966
    '/node_modules/(?!react-native|react-native-keychain)',
  ],
};
