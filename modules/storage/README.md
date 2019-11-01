# @react-x/storage

[![npm](https://img.shields.io/npm/v/@react-x/storage.svg)](https://www.npmjs.com/package/@react-x/storage)
[![npm](https://img.shields.io/npm/dt/@react-x/storage.svg)](https://www.npmjs.com/package/@react-x/storage)
[![npm](https://img.shields.io/npm/l/@react-x/storage.svg)](https://github.com/negativetwelve/react-x/blob/master/LICENSE)

Cross-platform storage for ReactDOM and React Native apps.

## Getting Started

Install `@react-x/storage` using `yarn`:

```shell
yarn add @react-x/storage
```

## Usage

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import {Text, Touchable, View} from 'react-native';
import Storage from '@react-x/storage';


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
  // Event Handlers
  // --------------------------------------------------

  @bind
  async handlePress() {
    Storage.setItem('name', this.props.user.name);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <View>
        ...
        <Touchable
          onPress={this.handlePress}>
          <Text>
            {'Copy Name'}
          </Text>
        </Touchable>
      </View>
    );
  }

}
```

## API

### `async setItem(key, value)`

Sets a key / value pair within the storage container.

### `async getItem(key)`

Gets a specified key from the storage container.

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/react-x/issues) or [submit a PR](https://github.com/negativetwelve/react-x/pulls).
