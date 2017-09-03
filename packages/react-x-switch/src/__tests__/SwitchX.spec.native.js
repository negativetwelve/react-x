// Modules
import React from 'react';
import SwitchX from '../SwitchX';


/* eslint-disable no-undef */
describe('SwitchX.native', () => {
  set('onTintColor', () => '#000000');
  set('isDisabled', () => false);

  context('with default props', () => {
    forEach({isOn: [true, false]}, () => {
      itRenders(() => (
        <SwitchX
          isOn={isOn}
          isDisabled={isDisabled}
          onTintColor={onTintColor}
        />
      ));
    });
  });
});
