/* eslint-disable brace-style */
const ReactX = {
  // Components
  get Render() { return require('react-x-render').default; },
  get Switch() { return require('react-x-switch').default; },

  // APIs
  get Clipboard() { return require('react-x-clipboard').default; },
  get Keychain() { return require('react-x-keychain').default; },
};


// Supports importing a single object or using named imports.
module.exports = ReactX;
