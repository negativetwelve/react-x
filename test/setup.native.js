import './setup';

// Need to mock react-native. react-native-mock doesn't work with 0.47+.
jest.mock('react-native', () => ({
  Switch: () => null,
}));
