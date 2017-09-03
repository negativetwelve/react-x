// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import SwitchIOS from 'react-ios-switch';
import 'react-ios-switch/build/bundle.css';


const SwitchX = (props) => (
  <SwitchIOS
    checked={props.isOn}
    onColor={props.onTintColor}
    onChange={props.onChange}
  />
);

// --------------------------------------------------
// Props
// --------------------------------------------------
SwitchX.propTypes = {
  onChange: PropTypes.func.isRequired,
  tintColor: PropTypes.string.isRequired,
  onTintColor: PropTypes.string.isRequired,
  thumbTintColor: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

SwitchX.defaultProps = {
};


export default SwitchX;
