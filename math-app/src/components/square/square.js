import React, { useState, useEffect } from "react";
import classes from "../component.module.css";

const Square = (props) => {
  const [squr, setSqur] = useState(null);

  // useEffect(()=>{
  //   setSqur(props.value);
  // },[props.value]);
  const squNum = (num) =>{
   return num *= num;
  };

  useEffect(()=>{
      setSqur(squNum(props.value));   
  }, [props.value]);
    

  return (
    <div className={classes.Input}>
      <label>Enter Number:</label>
      {props.print && (
        <label type="text" style={{ margin: "20px", border: "solid" }}>
          {squr}
        </label>
      )}
    </div>
  );
};
export default Square;
