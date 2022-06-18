import React, { useState } from "react";
import classes from "../component.module.css";

const Factorial = ({ print }) => {
  const [fact, setFact] = useState(null);

  const getFact = (Fact) => {
    const factorialize = (num) => {
      if (num < 0) return -1;
      else if (num === 0) return 1;
      else {
        return num * factorialize(num - 1);
      }
    };
    setFact(factorialize(Fact.target.value));
  };

  return (
    <div className={classes.Input}>
      <label>Enter Number:</label>
      {print && (
        <label style={{ margin: "20px", border: "solid" }} type="text">
          {fact}
        </label>
      )}
    </div>
  );
};
export default Factorial;
