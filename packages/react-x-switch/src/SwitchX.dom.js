// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import SwitchIOS from 'react-ios-switch';


class SwitchX extends React.Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static propTypes = {
    onTintColor: PropTypes.string.isRequired,
    isOn: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    tintColor: PropTypes.string,
    thumbTintColor: PropTypes.string,
  };

  static defaultProps = {
    onChange: null,
    tintColor: null,
    thumbTintColor: null,
  };

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  constructor(props, context) {
    super(props, context);
    require('react-ios-switch/build/bundle.css');
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    const {isOn, onTintColor, onChange} = this.props;

    return (
      <SwitchIOS
        checked={isOn}
        onColor={onTintColor}
        onChange={onChange}
      />
    );
  }

}


export default SwitchX;
