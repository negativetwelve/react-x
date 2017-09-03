// Modules
import React from 'react';
import SwitchX from '../SwitchX';


/* eslint-disable no-undef */
describe('SwitchX.native', () => {
  context('with default props', () => {
    forEach({isOn: [true, false]}, () => {
      itRenders(() => <SwitchX isOn={isOn} />);
    });
  });
});
