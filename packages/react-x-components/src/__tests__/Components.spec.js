// Modules
import React from 'react';
import Components from '../Components';

/* eslint-disable no-undef */
describe('Components', () => {
  const components = [
    // TODO(mark): Can't test SVG because it is a set of components.
    'Image',
    'Render',
    'Switch',
    'Text',
    'View',
  ];

  forEach({component: components}, () => {
    it('should exist', () => {
      expect(Components[component]).toBeDefined();
    });

    // TODO(mark): Create generic matcher to support stateless and class-based
    // components.
    it('should be a component', () => {
      expect(Components[component]).toBeInstanceOf(Function);
    });
  });
});
