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
  onTintColor: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  tintColor: PropTypes.string,
  thumbTintColor: PropTypes.string,
};

SwitchX.defaultProps = {
  onChange: null,
  tintColor: null,
  thumbTintColor: null,
};


export default SwitchX;
