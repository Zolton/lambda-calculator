import React from "react";

const NumberButton = props => {
  return (
    //console.log("this is set first number button props below"),
    //console.log(props.setFirstNumber),
    (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <button
          onClick={() => {
            props.addInput(props.number)
          }}
        >
          {props.number}
        </button>
      </>
    )
  );
};

export default NumberButton;
