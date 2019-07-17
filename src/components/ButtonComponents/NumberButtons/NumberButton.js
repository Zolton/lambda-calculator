import React from "react";

const NumberButton = props => {
  return (
    //console.log("this is set first number button props below"),
    //console.log(props.setFirstNumber),
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
      // since each button is its own component, we can just take the props.number when clicked and send it to addInput
      // 1 when clicked will send 1, 2 when clicked will send 2, etc.
        onClick={() => {
          props.addInput(props.number);
        }}
      >
        {props.number}
      </button>
    </>
  );
};

export default NumberButton;
