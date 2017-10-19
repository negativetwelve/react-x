# react-x-clipboard

[![npm](https://img.shields.io/npm/v/react-x-clipboard.svg)](https://www.npmjs.com/package/react-x-clipboard)
[![npm](https://img.shields.io/npm/dt/react-x-clipboard.svg)](https://www.npmjs.com/package/react-x-clipboard)
[![npm](https://img.shields.io/npm/l/react-x-clipboard.svg)](https://github.com/negativetwelve/react-x/blob/master/LICENSE)

Cross-platform clipboard functionality for ReactDOM and React Native apps.

## Getting Started

Install `react-x-clipboard` using `yarn`:

```shell
yarn add react-x-clipboard
```

## Usage

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import {Text, Touchable, View} from 'react-native';
import Clipboard from 'react-x-clipboard';


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
  handlePress() {
    Clipboard.setString(this.props.user.name);
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

### `async getString`

Returns a promise that resolves to the string currently copied to the clipboard. This currently is not supported on the DOM version. Please submit a PR with this functionality!

### `async setString(string)`

Copies the `string` to the clipboard.

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/react-x/issues) or [submit a PR](https://github.com/negativetwelve/react-x/pulls).
