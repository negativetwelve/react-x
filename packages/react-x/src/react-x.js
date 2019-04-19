/* eslint-disable brace-style */
module.exports = {
  // APIs
  get Animated() { return require('react-x-primitives').Animated; },
  get Clipboard() { return require('react-x-clipboard').default; },
  get Keychain() { return require('react-x-keychain').default; },
  get Platform() { return require('react-x-primitives').Platform; },
  get StyleSheet() { return require('react-x-primitives').StyleSheet; },

  // Components
  get Image() { return require('react-x-primitives').Image; },
  get Render() { return require('react-x-render').default; },
  get SVG() { return require('react-x-svg').default; },
  get Switch() { return require('react-x-switch').default; },
  get Text() { return require('react-x-primitives').Text; },
  get Touchable() { return require('react-x-primitives').Touchable; },
  get View() { return require('react-x-primitives').View; },
};
