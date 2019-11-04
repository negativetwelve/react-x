module.exports = {
  extends: [
    'airbnb',
    'react-app',
  ],
  rules: {
    'indent': [2, 2, {SwitchCase: 1}],
    'no-unused-vars': 2,
    'object-curly-newline': [2, {multiline: true, consistent: true}],
    'object-curly-spacing': [2, 'never'],
    'operator-linebreak': [2, 'after'],
    'quote-props': [2, 'consistent-as-needed'],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'max-len': [2, 100],

    // TODO(mark): These should be turned on but requires a larger change.
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'consistent-return': 0,
    'global-require': 0,
    'no-console': 0,
    'no-confusing-arrow': 0,
    'no-else-return': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-useless-return': 0,
    'quotes': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,

    // TODO(mark): These rules have issues with the shared/<package> packages.
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'react/destructuring-assignment': 0,
    'react/no-find-dom-node': 0,
    'react/no-string-refs': 0,
    'react/no-unused-state': 0,
    'react/sort-comp': 0,
    'react/state-in-constructor': 0,

    // TODO(mark): Need to double check if we want these off or not.
    'import/prefer-default-export': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/no-children-prop': 0,
    'react/no-unescaped-entities': 0,
  },
};
