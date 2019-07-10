import React, { useState } from "react";

const Display = props => {
  return (
    <div>
      {/* Display any props data here */}
      {props.firstNumber} {props.mathOperator}
    </div>
  );

  // {homeScore goes here, sethomescore passed down to props onClick}
};

export default Display;
