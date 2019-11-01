# react-x-render

[![npm](https://img.shields.io/npm/v/react-x-render.svg)](https://www.npmjs.com/package/react-x-render)
[![npm](https://img.shields.io/npm/dt/react-x-render.svg)](https://www.npmjs.com/package/react-x-render)
[![npm](https://img.shields.io/npm/l/react-x-render.svg)](https://github.com/negativetwelve/react-x/blob/master/LICENSE)

Render React components conditionally using if and unless.

## Getting Started

Install `react-x-render` using `yarn`:

```shell
yarn add react-x-render
```

## Usage

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Render from 'react-x-render';


class HomePage extends React.Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    const {user} = this.props;

    return (
      <View>
        <Render if={user.getIsActivated()}>
          <Text>{`Hi ${user.getName()}`}</Text>
        </Render>
        <View>
          ...
        </View>
        <Render unless={user.getIsDisabled()}>
          <Text>{`Receive $1,000,000 for free?`}</Text>
        </Render>
      </View>
    );
  }

}
```

## Props

Prop | Type | Required | Description
-----|------|----------|------------
`if` | boolean | no | If this is true, it will render the child.
`unless` | boolean | no | If this is false, it will render the child.

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/react-x/issues) or [submit a PR](https://github.com/negativetwelve/react-x/pulls).
