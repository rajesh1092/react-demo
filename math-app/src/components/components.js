import React, { useState } from "react";
import Factorial from "./factorial/factorial";
import Button from "./Button/Button";
import Square from "./square/square";

const Component = () => {
  const [print, setPrint] = useState(false);
  const [num, setNum] = useState(0);
  return (
    <div>
      <input
        style={{ margin: "20px" }}
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <Button print={print} setPrint={setPrint} />

      <Factorial print={print} />
      <Square print={print} />
    </div>
  );
};

export default Component;
