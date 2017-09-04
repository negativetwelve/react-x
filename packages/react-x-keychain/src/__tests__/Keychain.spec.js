// Modules
import Keychain from '../Keychain';


/* eslint-disable no-undef */
describe('Keychain', () => {
  describe('constructor', () => {
    set('namespace', () => undefined);
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

  context('with keychain instance', () => {
    set('namespace', () => 'com.somecompany');
    set('keychain', () => new Keychain({namespace}));

    describe('initialize', () => {
      set('keys', () => []);
      action('initialize', () => keychain.initialize(keys));

      context('with no keys', () => {
        it('should resolve to undefined', () => {
          expect(initialize()).resolves.toEqual(undefined);
        });
      });

      context('with keys', () => {
        set('keys', () => ['my', 'key', 'chain']);

        context('with empty keychain', () => {
          it('should resolve to undefined', () => {
            expect(initialize()).resolves.toEqual(undefined);
          });

          context('with primed cache', () => {
            beforeEach(async () => initialize());

            forEach({key: ['my', 'key', 'chain']}, () => {
              it('should set key to undefined', () => {
                expect(keychain.get(key)).toEqual(undefined);
              });
            });
          });
        });
      });
    });
  });
});
