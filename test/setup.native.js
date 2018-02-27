import './setup';

// Need to mock react-native. react-native-mock doesn't work with 0.47+.
jest.mock('react-native', () => ({
  // TODO(mark): Proper component mocks are much needed and all snapshots
  // will need to be updated once this mock is complete.

  Switch: () => null, // react-x-switch
  NativeModules: {}, // react-x-keychain
}));

// Mock out react-native-svg since we don't have the native components.
jest.mock('react-native-svg', () => ({
  Circle: () => null,
  Line: () => null,
  Rect: () => null,
}));
