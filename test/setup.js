// Jolt
import 'jest-preset-jolt/setup';
import 'jest-plugins-react/setup';

// Hack for react-art referencing the document object.
global.document = {
  createElement: () => null,
};
