// Libraries
import * as RNKeychain from 'react-native-keychain';
import pick from 'lodash.pick';


/**
 * Persistent secure storage for React Native apps. Wrapper around the
 * native keychain module on iOS and shared preferences on Android.
 */
class KeychainX {
  constructor({namespace}) {
    this.namespace = namespace;
  }

  async getEntries(keys) {
    try {
      // We store all key/values in the password field.
      const data = await RNKeychain.getGenericPassword(this.namespace);
      const {password} = data;
      const all = JSON.parse(password);

      // Only return the key / values for the keys we specified.
      return pick(all, keys);
    } catch (error) {
      // The first time we start the app, there isn't an entry for the
      // namespace. We should just return an empty object then.
      return {};
    }
  }

  async save(all) {
    const password = JSON.stringify(all);

    // NOTE(mark): We use the namespace as both the username and server values.
    return RNKeychain.setGenericPassword(
      this.namespace, // Username
      password, // Password
      this.namespace, // Server
    );
  }

  async clearKeys(keys, all = {}) {
    // Reset the entire keychain since that's the only native hook we have.
    // This removes the keys rather than just setting them to undefined.
    await RNKeychain.resetGenericPassword(this.namespace);

    // Set the remaining values on the keychain again.
    return this.save(all);
  }
}


export default KeychainX;
