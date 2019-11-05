// Modules
import React from 'react';
import View from '../View';

/* eslint-disable no-undef */
describe('View', () => {
  context('with no props', () => {
    itRenders(() => <View />);
  });

  context('with style prop', () => {
    itRenders(() => <View style={{padding: 12}} />);
  });
});
