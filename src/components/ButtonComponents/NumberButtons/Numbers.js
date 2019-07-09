import React, {useState} from "react";
import {numbers} from "../../../data"
import NumberButton from "./NumberButton"

//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {

const [numberList, setNumber] = useState(numbers)

  console.log(numberList)

  return (
    <div>
      {numberList.map(number=>(<NumberButton number={number} setFirstNumber = {props.setFirstNumber} />))}

      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;