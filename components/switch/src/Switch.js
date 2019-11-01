// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// React X
import SwitchX from './SwitchX';


const Switch = (props) => <SwitchX {...props} />;

// --------------------------------------------------
// Props
// --------------------------------------------------
Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onTintColor: PropTypes.string,
  thumbTintColor: PropTypes.string,
  tintColor: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Switch.defaultProps = {
  onChange: null,
  onTintColor: '#4CD964',
  thumbTintColor: null,
  tintColor: null,
  isDisabled: false,
};


export default Switch;
