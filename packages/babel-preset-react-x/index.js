module.exports = () => {
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-transform-runtime',
    ],
  };
};
