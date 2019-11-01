// Libraries
import React from 'react';
import PropTypes from 'prop-types';


const Render = ({if: ifCondition, unless, children}) => {
  if (ifCondition && !unless && children) {
    return React.Children.only(children);
  } else {
    return null;
  }
};

// --------------------------------------------------
// Props
// --------------------------------------------------
Render.propTypes = {
  if: PropTypes.bool,
  unless: PropTypes.bool,
};

Render.defaultProps = {
  if: true,
  unless: false,
};


export default Render;
