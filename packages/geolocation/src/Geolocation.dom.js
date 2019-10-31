// Libraries
import ExecutionEnvironment from 'exenv';

export default ExecutionEnvironment.canUseDOM ? window.navigator.geolocation : {};
