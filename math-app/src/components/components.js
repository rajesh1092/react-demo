import React, { useState } from "react";
import Factorial from "./factorial/factorial";
import Button from "./Button/Button";
import Square from "./square/square";

const Component = () => {
  const [print, setPrint] = useState(false);
  const [num, setNum] = useState("");
  const [squr, setS] = useState(0);
  const [fact, setF] = useState(0);

  const getNum =(e)=> setNum(e.target.value);

  
  const squrData = (data) =>{
    setS(data); 
  };
  const factData = (data) =>{
    setF(data);
  };

  return (
    <div>
      <input
        style={{ margin: "20px" }}
        type="text"
        value={num}
        onChange= {getNum}
      />
      <Button 
        print={print} 
        setPrint={setPrint} 
      />
      <Factorial 
        factData={factData} 
        value= {num} 
        print={print} 
      />
      <Square 
        squrData={squrData} 
        value= {num} 
        print={print} 
      />

      <label type="text" style={{ margin: "20px"}}>
          child output factorial : {fact}
        </label>
        <label type="text" style={{ margin: "20px"}}>
          child output square : {squr}
        </label>
    </div>
  );
};
export default Component;
