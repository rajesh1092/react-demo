import React, { useState } from "react";
import Factorial from "./factorial/factorial";
import Button from "./Button/Button";
import Square from "./square/square";

const Component = () => {
  const [print, setPrint] = useState(false);
  const [num, setNum] = useState(0);

  const getNum =(e)=> setNum(e.target.value);

  return (
    <div>
      <input
        style={{ margin: "20px" }}
        type="text"
        value={num}
        onChange= {getNum}
      />
      <Button print={print} setPrint={setPrint} />
      <Factorial value= {num} print={print} />
      <Square value= {num} print={print} />
    </div>
  );
};
export default Component;
