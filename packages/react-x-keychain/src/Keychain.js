// Libraries
import invariant from 'invariant';
import omit from 'lodash.omit';

// Modules
import KeychainX from './KeychainX';


/**
 * Persistent secure storage for all apps.
 */
class Keychain {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  constructor({namespace, domain, expires, path = '/', secure = false}) {
    this.initialized = false;
    this.all = {};
    this.options = {domain, expires, path, secure};
    this.keychain = new KeychainX({namespace});
  }

  async initialize(keys) {
    this.all = await this.getEntries(keys);
    this.initialized = true;
  }

  // --------------------------------------------------
  // Public
  // --------------------------------------------------
  get(key) {
    this.assertInitialized('get');
    return this.all[key];
  }

  async set(key, value) {
    this.assertInitialized('set');
    return this.setEntries({[key]: value});
  }

  async reset() {
    this.assertInitialized('reset');
    return this.clearKeys(Object.keys(this.all));
  }

  // --------------------------------------------------
  // Private
  // --------------------------------------------------
  assertInitialized(method) {
    invariant(
      this.initialized,
      `Keychain calling '${method}' before it has been initialized.`,
    );
  }

  async setEntries(entries = {}) {
    this.assertInitialized('setEntries');
    this.all = {...this.all, ...entries};
    return this.save(this.all);
  }

  // --------------------------------------------------
  // KeychainX
  // --------------------------------------------------
  async getEntries(keys = []) {
    return this.keychain.getEntries(keys);
  }

  async save(all = {}) {
    return this.keychain.save(all, this.options);
  }

  async clearKeys(keys = []) {
    // Modify the cache before clearing the actual keychain.
    this.all = omit(this.all, keys);
    return this.keychain.clearKeys(keys, this.all);
  }

}


export default Keychain;
