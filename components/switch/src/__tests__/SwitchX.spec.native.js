// Modules
import React from 'react';
import SwitchX from '../SwitchX';


/* eslint-disable no-undef */
describe('SwitchX.native', () => {
  set('onTintColor', () => '#000000');
  set('isDisabled', () => false);
  set('isOn', () => false);
  action('render', () => (
    <SwitchX
      isOn={isOn}
      isDisabled={isDisabled}
      onTintColor={onTintColor}
    />
  ));

  context('with default props', () => {
    itRenders(() => render());
  });

  forEach({isOn: [true, false]}, () => {
    itRenders(() => render());
  });

  forEach({isDisabled: [true, false]}, () => {
    itRenders(() => render());
  });
});
