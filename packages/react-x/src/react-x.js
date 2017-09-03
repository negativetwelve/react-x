/* eslint-disable brace-style */
const ReactX = {
  get Render() { return require('react-x-render').default; },
  get Switch() { return require('react-x-switch').default; },
};


// Supports importing a single object or using named imports.
module.exports = ReactX;
