// Jolt
import 'jest-preset-jolt/setup';
import 'jest-plugins-react/setup';

// Hack for react-art referencing the document object.
global.document = {
  createElement: () => null,
};

// TODO(mark): See the jest-config.dom.js testEnvironment comment for why
// this is necessary.
global.window = {
  document: {},
  addEventListener: () => {},
};
