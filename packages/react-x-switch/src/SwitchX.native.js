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
