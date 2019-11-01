// Libraries
const ReactDOM = require('react-dom');

// Mock out the createPortal call.
ReactDOM.createPortal = jest.fn((element, node) => element);
