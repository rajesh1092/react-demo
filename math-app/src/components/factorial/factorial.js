import React, { useState, useEffect } from "react";
import classes from "../component.module.css";

const Factorial = (props) => {
  const [fact, setFact] = useState(null);

  

  useEffect(()=> {
    const factorialize = (num) => {
      if (num < 0) return -1;
      else if (num === 0) return 1;
      else {
         return num * factorialize(num - 1);
      } 
    }
    setFact(factorialize(props.value));
  }, [props.value]);
  props.factData(fact);
   
    

  return (
    <div className={classes.Input}>
      <label>Enter Number:</label>
      {props.print && (
        <label style={{ margin: "20px", border: "solid" }} type="text">
          {fact}
        </label>
      )}
    </div>
  );
};
export default Factorial;
