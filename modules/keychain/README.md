# @react-x/keychain

[![npm](https://img.shields.io/npm/v/@react-x/keychain.svg)](https://www.npmjs.com/package/@react-x/keychain)
[![npm](https://img.shields.io/npm/dt/@react-x/keychain.svg)](https://www.npmjs.com/package/@react-x/keychain)
[![npm](https://img.shields.io/npm/l/@react-x/keychain.svg)](https://github.com/negativetwelve/react-x/blob/master/LICENSE)

Cross-platform persistent storage for ReactDOM (cookies) and React Native (keychain) apps.

## Getting Started

Install `@react-x/keychain` using `yarn`:

```shell
yarn add @react-x/keychain
```

## Setup

### React DOM

Nothing else is required to use this with `react-dom`. However, note that this keychain module uses cookies to store the data. Sensitive data should NOT be stored using this module as it is readable by anyone with access to the cookies. Use it for whatever you would normally store in cookies, ex: session tokens, etc.

### React Native

This module is backed on the native side by [`react-native-keychain`](https://github.com/oblador/react-native-keychain). Please follow the installation instructions located [here](https://github.com/oblador/react-native-keychain#installation).

## Usage

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Keychain from '@react-x/keychain';


class App extends React.Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  constructor(props, context) {
    super(props, context);
    this.state = {apiKey: null};
    this.keychain = new Keychain({namespace: 'my-app'});
  }

  componentDidMount() {
    this.getAPIKey();
  }

  async getAPIKey() {
    await this.keychain.initialize(['APIKey']);
    this.setState({apiKey: this.keychain.get('APIKey')});
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    const {user} = this.props;
    const {apiKey} = this.state;

    return (
      <View>
        ...
        <Text>{apiKey}</Text>
      </View>
    );
  }

}
```

## API

### `constructor({namespace})`

Creates an instance of the `Keychain` class with the proper `namespace`. The `namespace` is used to separate applications with the same bundle id.

### `async initialize(keys)`

Initialized the `Keychain` with a local cache based on the `keys` that are provided. This allows the `get` method to be a simple key/value lookup.

### `get(key)`

Returns the value for `key` or `undefined` if not found.

### `async set(key, value)`

Sets a specific `key` with a particular `value`. This method is async and returns a promise.

### `async reset()`

Resets all keys in the local cache as well as the persistent storage. This method is async and returns a promise.

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/react-x/issues) or [submit a PR](https://github.com/negativetwelve/react-x/pulls).
