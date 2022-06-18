import React, { useState } from "react";
import classes from "../component.module.css";

const Square = (props) => {
  const [squr, setSqur] = useState(null);

  const getSqur = (Squr) => {
    let num = Squr.target.value;
    num *= num;
    setSqur(num);
  };

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
