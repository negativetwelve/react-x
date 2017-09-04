// Modules
import Keychain from '../Keychain';


/* eslint-disable no-undef */
describe('Keychain', () => {
  set('namespace', () => undefined);

  describe('constructor', () => {
    action('construct', () => new Keychain({namespace}));

    context('with namespace', () => {
      set('namespace', () => 'com.mycompany');

      it('should not error', () => {
        expect(construct).not.toThrow();
      });
    });

    context('with undefined namespace', () => {
      set('namespace', () => undefined);

      it('should not error', () => {
        expect(construct).not.toThrow();
      });
    });
  });

  describe('initialize', () => {
    // TODO
  });
});
