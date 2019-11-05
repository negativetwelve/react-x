// Modules
import React from 'react';
import Text from '../Text';

/* eslint-disable no-undef */
describe('Text', () => {
  context('with no props', () => {
    itRenders(() => <Text />);
  });

  context('with style prop', () => {
    itRenders(() => <Text style={{padding: 12}} />);
  });
});
