import "./Input.css";
import React, { useContext } from "react";
import ConverterContext from "../context/ConverterContext";

const Input = () => {
  const { state, updateBtcValue } = useContext(ConverterContext);

  return (
    <div>
      <input
        className="input"
        type="number"
        value={state.value}
        onChange={(e) => {
          return e.target.value < 0
            ? updateBtcValue(e.target.value * -1)
            : updateBtcValue(e.target.value);
        }}
        placeholder="0"
      />
    </div>
  );
};

export default Input;
