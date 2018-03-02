// Modules
import React from 'react';
import ReactX from '../react-x';

/* eslint-disable no-undef */
describe('ReactX', () => {
  context('APIs', () => {
    const apis = [
      'Animated',
      'Clipboard',
      'Keychain',
      'Styled',
      'StyleSheet',
    ];

    forEach({api: apis}, () => {
      it('should exist', () => {
        expect(ReactX[api]).toBeDefined();
      });
    });
  });

  context('Components', () => {
    const components = [
      // TODO(mark): Can't test SVG because it is a set of components.
      'Image',
      'Render',
      'Switch',
      'Text',
      'Touchable',
      'View',
    ];

    forEach({component: components}, () => {
      it('should exist', () => {
        expect(ReactX[component]).toBeDefined();
      });

      it('should be a component', () => {
        expect(ReactX[component]).toBeInstanceOf(Function);
      });
    });
  });
});
