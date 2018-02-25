// Modules
import React from 'react';
import ReactX from '../react-x';


/* eslint-disable no-undef */
describe('ReactX', () => {
  const components = [
    // TODO(mark): Can't test SVG because it is a set of components.
    'Image',
    'Text',
    'View',

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

  const apis = [
    'Animated',
    'StyleSheet',

    'Clipboard',
    'Keychain',
    'Styled',
  ];

  forEach({api: apis}, () => {
    it('should exist', () => {
      expect(ReactX[api]).toBeDefined();
    });
  });
});
