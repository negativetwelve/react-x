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
[`@react-x/activity-indicator`](/components/activity-indicator) | [![npm](https://img.shields.io/npm/v/@react-x/activity-indicator.svg)][npm-activity-indicator] | Cross-platform ActivityIndicator component for ReactDOM and React Native.
[`@react-x/flat-list`](/components/flat-list) | [![npm](https://img.shields.io/npm/v/@react-x/flat-list.svg)][npm-flat-list] | Cross-platform FlatList component for ReactDOM and React Native.
[`@react-x/image`](/components/image) | [![npm](https://img.shields.io/npm/v/@react-x/image.svg)][npm-image] | Cross-platform Image component for ReactDOM and React Native.
[`@react-x/keyboard-avoiding-view`](/components/keyboard-avoiding-view) | [![npm](https://img.shields.io/npm/v/@react-x/keyboard-avoiding-view.svg)][npm-keyboard-avoiding-view] | Cross-platform KeyboardAvoidingView component for ReactDOM and React Native.
[`@react-x/safe-area-view`](/components/safe-area-view) | [![npm](https://img.shields.io/npm/v/@react-x/safe-area-view.svg)][npm-safe-area-view] | Cross-platform SafeAreaView component for ReactDOM and React Native.
[`@react-x/scroll-view`](/components/scroll-view) | [![npm](https://img.shields.io/npm/v/@react-x/scroll-view.svg)][npm-scroll-view] | Cross-platform ScrollView component for ReactDOM and React Native.
[`@react-x/section-list`](/components/section-list) | [![npm](https://img.shields.io/npm/v/@react-x/section-list.svg)][npm-section-list] | Cross-platform SectionList component for ReactDOM and React Native.
[`@react-x/svg`](/components/svg) | [![npm](https://img.shields.io/npm/v/@react-x/svg.svg)][npm-svg] | Cross-platform SVG support for ReactDOM and React Native.
[`@react-x/switch`](/components/switch) | [![npm](https://img.shields.io/npm/v/@react-x/switch.svg)][npm-switch] | Switch component for toggling on/off.
[`@react-x/text`](/components/text) | [![npm](https://img.shields.io/npm/v/@react-x/text.svg)][npm-text] | Cross-platform Text component for ReactDOM and React Native.
[`@react-x/text-input`](/components/text-input) | [![npm](https://img.shields.io/npm/v/@react-x/text-input.svg)][npm-text-input] | TextInput component ReactDOM and React Native.
[`@react-x/touchable`](/components/touchable) | [![npm](https://img.shields.io/npm/v/@react-x/touchable.svg)][npm-touchable] | Cross-platform Touchable components for ReactDOM and React Native.
[`@react-x/view`](/components/view) | [![npm](https://img.shields.io/npm/v/@react-x/view.svg)][npm-view] | Cross-platform View component for ReactDOM and React Native.

[npm-activity-indicator]: https://www.npmjs.com/package/@react-x/activity-indicator
[npm-flat-list]: https://www.npmjs.com/package/@react-x/flat-list
[npm-image]: https://www.npmjs.com/package/@react-x/image
[npm-keyboard-avoiding-view]: https://www.npmjs.com/package/@react-x/keyboard-avoiding-view
[npm-safe-area-view]: https://www.npmjs.com/package/@react-x/safe-area-view
[npm-scroll-view]: https://www.npmjs.com/package/@react-x/scroll-view
[npm-section-list]: https://www.npmjs.com/package/@react-x/section-list
[npm-svg]: https://www.npmjs.com/package/@react-x/svg
[npm-switch]: https://www.npmjs.com/package/@react-x/switch
[npm-text]: https://www.npmjs.com/package/@react-x/text
[npm-text-input]: https://www.npmjs.com/package/@react-x/text-input
[npm-touchable]: https://www.npmjs.com/package/@react-x/touchable
[npm-view]: https://www.npmjs.com/package/@react-x/view

## Modules

Name | Version | Description
-----|---------|------------
[`@react-x/animated`](/modules/animated) | [![npm](https://img.shields.io/npm/v/@react-x/animated.svg)][npm-animated] | Animated module for React DOM and React Native.
[`@react-x/clipboard`](/modules/clipboard) | [![npm](https://img.shields.io/npm/v/@react-x/clipboard.svg)][npm-clipboard] | Clipboard module for React DOM and React Native.
[`@react-x/execution-environment`](/modules/execution-environment) | [![npm](https://img.shields.io/npm/v/@react-x/execution-environment.svg)][npm-execution-environment] | ExecutionEnvironment module for React DOM and React Native.
[`@react-x/geolocation`](/modules/geolocation) | [![npm](https://img.shields.io/npm/v/@react-x/geolocation.svg)][npm-geolocation] | Geolocation module for React DOM and React Native.
[`@react-x/keychain`](/modules/keychain) | [![npm](https://img.shields.io/npm/v/@react-x/keychain.svg)][npm-keychain] | Persistent storage for React DOM (cookies) and React Native (keychain).
[`@react-x/linking`](/modules/linking) | [![npm](https://img.shields.io/npm/v/@react-x/linking.svg)][npm-linking] | Linking module for React DOM and React Native.
[`@react-x/net-info`](/modules/net-info) | [![npm](https://img.shields.io/npm/v/@react-x/net-info.svg)][npm-net-info] | NetInfo module for React DOM and React Native.
[`@react-x/platform`](/modules/platform) | [![npm](https://img.shields.io/npm/v/@react-x/platform.svg)][npm-platform] | Platform module for React DOM and React Native.
[`@react-x/storage`](/modules/storage) | [![npm](https://img.shields.io/npm/v/@react-x/storage.svg)][npm-storage] | Storage module for React DOM and React Native.
[`@react-x/style-sheet`](/modules/style-sheet) | [![npm](https://img.shields.io/npm/v/@react-x/style-sheet.svg)][npm-style-sheet] | StyleSheet module for React DOM and React Native.

[npm-animated]: https://www.npmjs.com/package/@react-x/animated
[npm-clipboard]: https://www.npmjs.com/package/@react-x/clipboard
[npm-execution-environment]: https://www.npmjs.com/package/@react-x/execution-environment
[npm-geolocation]: https://www.npmjs.com/package/@react-x/geolocation
[npm-keychain]: https://www.npmjs.com/package/@react-x/keychain
[npm-linking]: https://www.npmjs.com/package/@react-x/linking
[npm-net-info]: https://www.npmjs.com/package/@react-x/net-info
[npm-platform]: https://www.npmjs.com/package/@react-x/platform
[npm-storage]: https://www.npmjs.com/package/@react-x/storage
[npm-style-sheet]: https://www.npmjs.com/package/@react-x/style-sheet

## Tools

Name | Version | Description
-----|---------|------------
[`@react-x/babel-preset`](/tools/babel-preset) | [![npm](https://img.shields.io/npm/v/@react-x/babel-preset.svg)][npm-babel-preset] | Babel preset for compiling react-x packages.
[`@react-x/jest-preset-dom`](/tools/jest-preset-dom) | [![npm](https://img.shields.io/npm/v/@react-x/jest-preset-dom.svg)][npm-jest-preset-dom] | Jest preset for testing react-x dom packages.
[`@react-x/jest-preset-native`](/tools/jest-preset-native) | [![npm](https://img.shields.io/npm/v/@react-x/jest-preset-native.svg)][npm-jest-preset-native] | Jest preset for testing react-x native packages.

[npm-babel-preset]: https://www.npmjs.com/package/@react-x/babel-preset
[npm-jest-preset-dom]: https://www.npmjs.com/package/@react-x/jest-preset-dom
[npm-jest-preset-native]: https://www.npmjs.com/package/@react-x/jest-preset-native

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/react-x/issues) or [submit a PR](https://github.com/negativetwelve/react-x/pulls).
