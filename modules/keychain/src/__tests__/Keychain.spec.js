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

    describe('#initialize', () => {
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
            beforeEach(() => initialize());

            forEach({key: ['my', 'key', 'chain']}, () => {
              it('should set key to undefined', () => {
                expect(keychain.get(key)).toEqual(undefined);
              });
            });
          });
        });
      });
    });

    context('with initialized keychain', () => {
      set('keys', () => []);
      beforeEach(() => keychain.initialize(keys));

      describe('#get', () => {
        set('key', () => undefined);
        action('get', () => keychain.get(key));

        context('with empty keychain', () => {
          forEach({key: [undefined, 'my', 'key']}, () => {
            it('should return undefined', () => {
              expect(get()).toEqual(undefined);
            });
          });
        });

        context('with initialized cache', () => {
          context('with keys in all', () => {
            set('key', () => 'test');
            set('all', () => ({test: 'value'}));
            beforeEach(() => {
              keychain.all = all;
            });

            it('should return the value', () => {
              expect(get()).toEqual('value');
            });
          });
        });
      });

      describe('#set', () => {
        // TODO
      });

      describe('#reset', () => {
        // TODO
      });
    });
  });
});
