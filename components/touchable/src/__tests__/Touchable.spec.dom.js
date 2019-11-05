// Modules
import React from 'react';
import Touchable from '../Touchable';

/* eslint-disable no-undef */
describe('Touchable', () => {
  context('with no props', () => {
    itRenders(() => <Touchable />);
  });

  context('with style prop', () => {
    itRenders(() => <Touchable style={{padding: 12}} />);
  });
});
