// Libraries
import React from 'react';
import ReactNative from 'react-native';
import PropTypes from 'prop-types';


class Switch extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static propTypes = {
    isOn: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    onTintColor: PropTypes.color,
    thumbTintColor: PropTypes.color,
    tintColor: PropTypes.color,
    isDisabled: PropTypes.bool,
  };

  static defaultProps = {
    onChange: () => {},
    onTintColor: Colors.quad.blue,
    thumbTintColor: null,
    tintColor: null,
    isDisabled: false,
  };

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    const {isDisabled, isOn, onChange} = this.props;
    const {tintColor, onTintColor, thumbTintColor} = this.props;

    return (
      <ReactNative.Switch
        disabled={isDisabled}
        value={isOn}
        tintColor={tintColor}
        onTintColor={onTintColor}
        thumbTintColor={thumbTintColor}
        onValueChange={onChange}
      />
    );
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  static styles = {
  };

}


export default Switch;
