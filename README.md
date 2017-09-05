# React X

[![npm](https://img.shields.io/npm/v/react-x.svg)](https://www.npmjs.com/package/react-x)
[![npm](https://img.shields.io/npm/dt/react-x.svg)](https://www.npmjs.com/package/react-x)
[![npm](https://img.shields.io/npm/l/react-x.svg)](https://github.com/negativetwelve/react-x/blob/master/LICENSE)
[![CircleCI](https://img.shields.io/circleci/project/github/negativetwelve/react-x.svg?label=circle)](https://circleci.com/gh/negativetwelve/react-x)
[![Travis](https://img.shields.io/travis/negativetwelve/react-x.svg?label=travis)](https://travis-ci.org/negativetwelve/react-x)
[![AppVeyor](https://img.shields.io/appveyor/ci/negativetwelve/react-x/master.svg?label=appveyor)](https://ci.appveyor.com/project/negativetwelve/react-x)
[![Coveralls](https://img.shields.io/coveralls/negativetwelve/react-x.svg)](https://coveralls.io/github/negativetwelve/react-x?branch=master)

Cross-platform React components for ReactDOM and React Native.

## Getting Started

Install `react-x` using `yarn`:

```shell
yarn add react-x
```

## Setup

### React Native

No additional setup required for react-native.

### React DOM

If using Webpack, you need to add the `.dom.js` extension to the extensions array.

```javascript
module.exports = {
  resolve: {
    extensions: ['.dom.js', '.js', '.json'],
  },
};
```

## APIs

API | Version | Description
----|---------|------------
[`react-x-keychain`](/packages/react-x-keychain) | [![npm](https://img.shields.io/npm/v/react-x-keychain.svg)][npm-keychain] | Persistent storage for React DOM (cookies) and React Native (keychain).

[npm-keychain]: https://www.npmjs.com/package/react-x-keychain

## Components

Component | Version | Description
----------|---------|------------
[`react-x-render`](/packages/react-x-render) | [![npm](https://img.shields.io/npm/v/react-x-render.svg)][npm-render] | Conditional rendering based on if/unless conditions.
[`react-x-switch`](/packages/react-x-switch) | [![npm](https://img.shields.io/npm/v/react-x-switch.svg)][npm-switch] | Switch component for toggling on/off.

[npm-render]: https://www.npmjs.com/package/react-x-render
[npm-switch]: https://www.npmjs.com/package/react-x-switch

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/react-x/issues) or [submit a PR](https://github.com/negativetwelve/react-x/pulls).
