// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// React X
import TextInputX from './TextInputX';

// --------------------------------------------------
// Components
// --------------------------------------------------

// NOTE(mark): Ignore the innerRef prop which is passed by some styling
// libraries.
const TextInput = ({innerRef, ...props}) => <TextInputX {...props} />;

// --------------------------------------------------
// Props
// --------------------------------------------------
TextInput.propTypes = {
};

TextInput.defaultProps = {
};

export default TextInput;
