import React from "react";
import {numbers} from "../../../data"

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {

  
  return (
    <div>
      {props.numbers.map(number=>
        console.log(number)
        )}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
