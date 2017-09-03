# react-x-switch

[![npm](https://img.shields.io/npm/v/react-x-switch.svg)](https://www.npmjs.com/package/react-x-switch)
[![npm](https://img.shields.io/npm/dt/react-x-switch.svg)](https://www.npmjs.com/package/react-x-switch)
[![npm](https://img.shields.io/npm/l/react-x-switch.svg)](https://github.com/negativetwelve/react-x/blob/master/LICENSE)

Cross-platform Switch component for React and React Native.

## Getting Started

Install `react-x-switch` using `yarn`:

```shell
yarn add react-x-switch
```

## Setup

### React DOM

If using Webpack, you need to add a way to compile the css for the web version. Simply whitelist the `react-ios-switch` module using `include`:

```javascript
module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      include: [
        'node_modules/react-ios-switch',
      ],
      use: ['style-loader', 'css-loader'],
    }],
  },
};
```

## Usage

```javascript
import Switch from 'react-x-switch';
```

## Props

Prop | Type | Required | Description
-----|------|----------|------------
`isOn` | boolean | yes | Whether or not the switch is on or off.
`onChange` | function | no | Callback triggered when the switch is toggled.
`onTintColor` | string | no | The color the switch should be when turned on.
`thumbTintColor` | string | no | The color of the tappable part of the switch.
`tintColor` | string | no | The color the switch should be when turned off.
`isDisabled` | boolean | no | Whether or not this switch is togglable.

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/react-x/issues) or [submit a PR](https://github.com/negativetwelve/react-x/pulls).
