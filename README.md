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

## Components

Name | Version | Description
-----|---------|------------
[`@react-x/primitives`](/packages/@react-x/primitives) | [![npm](https://img.shields.io/npm/v/@react-x/primitives.svg)][npm-primitives] | Set of primitive components to render across targets.
[`@react-x/svg`](/packages/@react-x/svg) | [![npm](https://img.shields.io/npm/v/@react-x/svg.svg)][npm-svg] | Cross-platform SVG support for ReactDOM and React Native.
[`@react-x/switch`](/packages/@react-x/switch) | [![npm](https://img.shields.io/npm/v/@react-x/switch.svg)][npm-switch] | Switch component for toggling on/off.
[`@react-x/text-input`](/packages/@react-x/text-input) | [![npm](https://img.shields.io/npm/v/@react-x/text-input.svg)][npm-text-input] | TextInput component ReactDOM and React Native.

[npm-primitives]: https://www.npmjs.com/package/@react-x/primitives
[npm-render]: https://www.npmjs.com/package/@react-x/render
[npm-svg]: https://www.npmjs.com/package/@react-x/svg
[npm-switch]: https://www.npmjs.com/package/@react-x/switch
[npm-text-input]: https://www.npmjs.com/package/@react-x/text-input

## Modules

Name | Version | Description
-----|---------|------------
[`@react-x/clipboard`](/packages/@react-x/clipboard) | [![npm](https://img.shields.io/npm/v/@react-x/clipboard.svg)][npm-clipboard] | Clipboard module for React DOM and React Native.
[`@react-x/geolocation`](/packages/@react-x/geolocation) | [![npm](https://img.shields.io/npm/v/@react-x/geolocation.svg)][npm-geolocation] | Geolocation module for React DOM and React Native.
[`@react-x/keychain`](/packages/@react-x/keychain) | [![npm](https://img.shields.io/npm/v/@react-x/keychain.svg)][npm-keychain] | Persistent storage for React DOM (cookies) and React Native (keychain).
[`@react-x/linking`](/packages/@react-x/linking) | [![npm](https://img.shields.io/npm/v/@react-x/linking.svg)][npm-linking] | Linking module for React DOM and React Native.
[`@react-x/storage`](/packages/@react-x/storage) | [![npm](https://img.shields.io/npm/v/@react-x/storage.svg)][npm-storage] | Storage module for React DOM and React Native.

[npm-clipboard]: https://www.npmjs.com/package/@react-x/clipboard
[npm-geolocation]: https://www.npmjs.com/package/@react-x/geolocation
[npm-keychain]: https://www.npmjs.com/package/@react-x/keychain
[npm-linking]: https://www.npmjs.com/package/@react-x/linking
[npm-storage]: https://www.npmjs.com/package/@react-x/storage

## Tools

Name | Version | Description
-----|---------|------------
[`@react-x/babel-preset`](/packages/@react-x/babel-preset) | [![npm](https://img.shields.io/npm/v/@react-x/babel-preset.svg)][npm-babel-preset] | Babel preset for compiling react-x packages.
[`@react-x/jest-preset-dom`](/packages/@react-x/jest-preset-dom) | [![npm](https://img.shields.io/npm/v/@react-x/jest-preset-dom.svg)][npm-jest-preset-dom] | Jest preset for testing react-x dom packages.
[`@react-x/jest-preset-native`](/packages/@react-x/jest-preset-native) | [![npm](https://img.shields.io/npm/v/@react-x/jest-preset-native.svg)][npm-jest-preset-native] | Jest preset for testing react-x native packages.

[npm-babel-preset]: https://www.npmjs.com/package/@react-x/babel-preset
[npm-jest-preset-dom]: https://www.npmjs.com/package/@react-x/jest-preset-dom
[npm-jest-preset-native]: https://www.npmjs.com/package/@react-x/jest-preset-native

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/react-x/issues) or [submit a PR](https://github.com/negativetwelve/react-x/pulls).
