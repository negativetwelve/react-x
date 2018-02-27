// Modules
import React from 'react';
import ReactX from '../react-x';

/* eslint-disable no-undef */
describe('ReactX', () => {
  const names = [
    'Animated',
    'Clipboard',
    'Components',
    'Keychain',
    'Styled',
    'StyleSheet',
  ];

  forEach({name: names}, () => {
    it('should exist', () => {
      expect(ReactX[name]).toBeDefined();
    });
  });
});
