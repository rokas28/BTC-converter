import React, { useContext, useEffect } from "react";
import ConverterContext from "../context/ConverterContext";
import Input from "./Input";
import PriceFieldList from "./PriceFieldList";

const App = () => {
  const { state, fetchBtc } = useContext(ConverterContext);

  useEffect(() => {
    fetchBtc();
  }, []);

  console.log(state);

  const priceFieldList = state.currencies ? (
    <PriceFieldList
      value={state.value}
      currencies={state.currencies}
      PriceFields={state.PriceFields}
    />
  ) : null;

  return (
    <div>
      <Input />
      {priceFieldList}
    </div>
  );
};

export default App;
