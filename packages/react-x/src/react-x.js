/* eslint-disable brace-style */
const ReactX = {
  // Components
  get Image() { return require('react-x-primitives').Image; },
  get SVG() { return require('react-x-primitives').SVG; },
  get Text() { return require('react-x-primitives').Text; },
  get View() { return require('react-x-primitives').View; },

  get Render() { return require('react-x-render').default; },
  get Switch() { return require('react-x-switch').default; },

  // APIs
  get Animated() { return require('react-x-primitives').Animated; },
  get StyleSheet() { return require('react-x-primitives').StyleSheet; },

  get Clipboard() { return require('react-x-clipboard').default; },
  get Keychain() { return require('react-x-keychain').default; },
  get Styled() { return require('react-x-styled').default; },
};


// Supports importing a single object or using named imports.
module.exports = ReactX;
