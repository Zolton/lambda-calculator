import React from "react";


const OperatorButton = (props) => {
  return (
    console.log("this is props" + props),
    console.log(props),
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={()=>{

      }}>{props.operator}</button>
    </>
  );
};

export default OperatorButton;