// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import SwitchIOS from 'react-ios-switch';


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
  onChange: PropTypes.func,
};

SwitchX.defaultProps = {
  onChange: null,
};


export default SwitchX;
