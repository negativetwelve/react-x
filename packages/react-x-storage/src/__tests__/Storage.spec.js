// Modules
import Storage from '../Storage';


/* eslint-disable no-undef */
describe('Storage', () => {
  describe('getItem', () => {
    set('key', () => 'KEY');
    action('getItem', () => Storage.getItem(key));

    context('with empty storage', () => {
      it('should return undefined', () => {
        expect(getItem()).resolves.toEqual(null);
      });
    });

    context('with existing value', () => {
      set('value', () => 'VALUE');
      beforeEach(() => Storage.setItem(key, value));

      it('should return the value', () => {
        expect(getItem()).resolves.toEqual(value);
      });
    });
  });

  describe('setItem', () => {
    set('key', () => 'KEY');
    set('value', () => 'VALUE');
    action('setItem', () => Storage.setItem(key, value));

    context('with empty storage', () => {
      // TODO
    });
  });
});
