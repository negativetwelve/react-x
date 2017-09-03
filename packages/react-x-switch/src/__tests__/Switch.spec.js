// Modules
import Switch from '../Switch';


describe('Switch', () => {
  context('with default props', () => {
    forEach({isOn: [true, false]}, () => {
      itRenders(() => <Switch isOn={isOn} />);
    });
  });
});
