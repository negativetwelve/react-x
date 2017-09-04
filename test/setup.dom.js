// react-dom specific mocks go here.
import './setup';

// TODO(mark): See the jest-config.dom.js testEnvironment comment for why
// this is necessary.
global.window = {
  document: {},
  addEventListener: () => {},
};
