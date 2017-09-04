// Libraries
import invariant from 'invariant';

// Modules
import KeychainX from './KeychainX';


/**
 * Persistent secure storage for all apps.
 */
class Keychain {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  constructor({namespace}) {
    this.namespace = namespace;
    this.initialized = false;
    this.all = {};
    this.keychain = new KeychainX();
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
    const keys = Object.keys(this.all);

    // Reset the cache before clearing the actual keychain.
    this.all = {};
    return this.clearKeys(keys);
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

  async getEntries(keys = []) {
    return this.keychain.getEntries(keys);
  }

  async setEntries(entries = {}) {
    this.assertInitialized('setEntries');
    this.all = {...this.all, ...entries};
    return this.save(this.all);
  }

  async clearKeys(keys = []) {
    return this.keychain.clearKeys(keys);
  }

  async save(all = {}) {
    return this.keychain.save(all);
  }

}


export default Keychain;
