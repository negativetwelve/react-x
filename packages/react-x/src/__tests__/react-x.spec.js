// Modules
import ReactX from '../react-x';

/* eslint-disable no-undef */
describe('ReactX', () => {
  context('Components', () => {
    const components = [
      // TODO(mark): Can't test SVG because it is a set of components.
      'Image',
      'Switch',
      'Text',
      'TextInput',
      'TouchableHighlight',
      'TouchableOpacity',
      'TouchableWithoutFeedback',
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

  context('Modules', () => {
    const modules = [
      'Animated',
      'Clipboard',
      'Keychain',
      'Platform',
      'Storage',
      'StyleSheet',
    ];

    forEach({_module: modules}, () => {
      it('should exist', () => {
        expect(ReactX[_module]).toBeDefined();
      });
    });
  });
});
