/* eslint-disable brace-style */
module.exports = {
  // Components
  get Image() { return require('@react-x/image').default; },
  get SVG() { return require('@react-x/svg').default; },
  get Switch() { return require('@react-x/switch').default; },
  get Text() { return require('@react-x/text').default; },
  get TextInput() { return require('@react-x/text-input').default; },
  get Touchable() { return require('@react-x/touchable').default; },
  get View() { return require('@react-x/view').default; },

  // Modules
  get Animated() { return require('@react-x/animated').default; },
  get Clipboard() { return require('@react-x/clipboard').default; },
  get Keychain() { return require('@react-x/keychain').default; },
  get Platform() { return require('@react-x/platform').default; },
  get Storage() { return require('@react-x/storage').default; },
  get StyleSheet() { return require('@react-x/style-sheet').default; },
};
