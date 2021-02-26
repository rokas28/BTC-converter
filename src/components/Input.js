import React, { useContext } from "react";
import ConverterContext from "../context/ConverterContext";

const Input = () => {
  const { state, updateBtcValue } = useContext(ConverterContext);

  return (
    <div>
      <input
        type="number"
        value={state.value}
        onChange={(e) => updateBtcValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
