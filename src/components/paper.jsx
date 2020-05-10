import React from "react";
import PropTypes from "prop-types";

const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="kerangka">{children}</div>
    </div>
  );
};

Paper.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;