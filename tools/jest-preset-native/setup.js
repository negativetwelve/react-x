// Libraries
const MockAsyncStorage = require('mock-async-storage').default;

require('jest-plugins')([
  'jest-plugins-react',
  'jest-plugins-recommended',
]);

// Hack for react-art referencing the document object.
global.document = {
  createElement: () => null,
};

// Need to mock react-native. react-native-mock doesn't work with 0.47+.
// Specifying `virtual: true` will mock out this module only if it exists.
jest.mock('react-native', () => ({
  // TODO(mark): Proper component mocks are much needed and all snapshots
  // will need to be updated once this mock is complete.

  // Modules
  AsyncStorage: new MockAsyncStorage(), // @react-x/storage
  NativeModules: {}, // @react-x/keychain

  // Components
  Image: () => null,
  Switch: () => null,
  Text: () => null,
  TextInput: () => null,
  TouchableWithoutFeedback: () => null,
  View: () => null,
}), {virtual: true});

// Mock out react-native-svg since we don't have the native components.
jest.mock('react-native-svg', () => ({
  Circle: () => null,
  Line: () => null,
  Rect: () => null,
}), {virtual: true});
