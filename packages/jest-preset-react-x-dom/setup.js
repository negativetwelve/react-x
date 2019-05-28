require('jest-plugins')([
  'jest-plugins-react',
  'jest-plugins-recommended',
]);

// TODO(mark): Replace this with a proper window/document/element setup.
const element = {
  setAttribute: () => null,
};

const location = {
  href: undefined,
};

const navigator = {
};

const screen = {
  height: undefined,
  width: undefined,
};

const document = {
  addEventListener: () => {},
  createElement: () => element,
  getElementById: () => element,
};

const window = {
  addEventListener: () => {},
  document,
  location,
  navigator,
  screen,
};

global.document = document;
global.navigator = navigator;
global.window = window;
