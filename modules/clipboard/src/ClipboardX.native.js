// Libraries
import ReactNative from 'react-native';


export default {
  getString: (string) => ReactNative.Clipboard.getString(string),
  setString: (string) => ReactNative.Clipboard.setString(string),
};
