import React from "react";
import PropTypes from "prop-types";

function Result({ history, output }) {
  let colorStyle = {
    color: output === "Error" ? "#f11" : "#fff",
  };

  return (
    <div style={colorStyle} className="result">
      <div className="history">{history}</div>
      <div className="output">{output}</div>
    </div>
  );
}

Result.propTypes = {
  history: PropTypes.string,
  output: PropTypes.string,
};

export default Result;
