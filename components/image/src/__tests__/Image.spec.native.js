// Modules
import React from 'react';
import Image from '../Image';

/* eslint-disable no-undef */
describe('Image', () => {
  context('with no props', () => {
    itRenders(() => <Image />);
  });

  context('with style prop', () => {
    itRenders(() => <Image style={{padding: 12}} />);
  });
});
