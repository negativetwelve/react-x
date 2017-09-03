// Modules
import React from 'react';
import ReactX from '../react-x';


/* eslint-disable no-undef */
describe('ReactX', () => {
  const components = [
    'Render',
    'Switch',
  ];

  forEach({component: components}, () => {
    it('should exist', () => {
      expect(ReactX[component]).toBeDefined();
    });

    // TODO(mark): Create generic matcher to support stateless and class-based
    // components.
    it('should be a component', () => {
      expect(ReactX[component]).toBeInstanceOf(Function);
    });
  });
});
