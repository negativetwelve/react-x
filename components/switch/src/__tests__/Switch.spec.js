// Modules
import React from 'react';
import Switch from '../Switch';


/* eslint-disable no-undef */
describe('Switch', () => {
  set('isOn', () => false);
  action('render', () => (
    <Switch
      isOn={isOn}
    />
  ));

  context('with default props', () => {
    itShallowRenders(() => render());
  });

  forEach({isOn: [true, false]}, () => {
    itShallowRenders(() => render());
  });
});
