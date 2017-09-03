// Libraries
import React from 'react';
import ReactNative from 'react-native';
import PropTypes from 'prop-types';


const SwitchX = (props) => (
  <ReactNative.Switch
    disabled={props.isDisabled}
    value={props.isOn}
    tintColor={props.tintColor}
    onTintColor={props.onTintColor}
    thumbTintColor={props.thumbTintColor}
    onValueChange={props.onChange}
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
