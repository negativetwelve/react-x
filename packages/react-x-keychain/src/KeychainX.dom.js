// Libraries
import Cookies from 'cookies-js';


/**
 * Persistent secure storage for the web. Wrapper around Cookies for the web.
 */
class KeychainX {

  async getEntries(keys = []) {
    const accumulate = (all, key) => {
      all[key] = Cookies.get(key);
      return all;
    };

    return keys.reduce(accumulate, {});
  }

  async save(all = {}, options = {}) {
    return Object.entries(all).forEach(([key, value]) => {
      Cookies.set(key, value, options);
    });
  }

  async clearKeys(keys = []) {
    return keys.map((key) => Cookies.expire(key));
  }

}


export default KeychainX;
