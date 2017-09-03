// Modules
import React from 'react';
import ReactX from '../react-x';


/* eslint-disable no-undef */
describe('ReactX', () => {
  describe('Switch', () => {
    it('should exist', () => {
      expect(ReactX.Switch).toBeDefined();
    });

    it('should be a component', () => {
      expect(ReactX.Switch).toBeInstanceOf(Function);
    });
  });
});
