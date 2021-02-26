import React, { useContext } from "react";
import ConverterContext from "../context/ConverterContext";

const Input = () => {
  const { value, updateBtcValue } = useContext(ConverterContext);

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => updateBtcValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
