export default {
  getItem: async (key) => {
    return localStorage.getItem(key);
  },
  setItem: async (key, value) => {
    return localStorage.setItem(key, value);
  },
  removeItem: async (key) => {
    return localStorage.removeItem(key);
  },
  clear: async () => {
    return localStorage.clear();
  },
};
