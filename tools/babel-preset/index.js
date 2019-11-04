module.exports = (context, options = {}) => {
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-transform-runtime',
    ],
  };
};
