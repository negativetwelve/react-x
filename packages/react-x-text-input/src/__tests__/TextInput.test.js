// Modules
import React from 'react';
import TextInput from '../TextInput';

/* eslint-disable no-undef */
describe('TextInput', () => {
  context('with no props', () => {
    itRenders(() => <TextInput />);
  });

  context('with style prop', () => {
    itRenders(() => <TextInput style={{padding: 12}} />);
  });
});
