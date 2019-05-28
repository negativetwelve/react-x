require('jest-plugins')([
  'jest-plugins-react',
  'jest-plugins-recommended',
]);

// Hack for react-art referencing the document object.
global.document = {
  createElement: () => null,
};

// TODO(mark): See the jest-config.dom.js testEnvironment comment for why
// this is necessary.
global.window = {
  document: global.document,
  addEventListener: () => {},
};
