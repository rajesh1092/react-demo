import React from "react";
import classes from "../component.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={classes.Button}
        type="submit"
        onClick={() => props.setPrint(!props.print)}
      >
        Calculate
      </button>
    </div>
  );
};
export default Button;
