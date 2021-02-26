import React, { useContext, useEffect } from "react";
import ConverterContext from "../context/ConverterContext";
import Input from "./Input";
import PriceFieldList from "./PriceFieldList";
import Dropdown from "./Dropdown";

const App = () => {
  const { state, fetchBtc, addPriceField, removePriceField } = useContext(
    ConverterContext
  );

  useEffect(() => {
    fetchBtc();
  }, []);

  console.log(state);
  const newCurrencies = Object.entries({ ...state.currencies });
  const dropdownOptions = newCurrencies.filter((currency) => {
    if (state.priceFields.includes(currency[0])) {
      return null;
    }
    return currency;
  });

  const removeField = (fieldToRemove) => {
    const newPricefields = state.priceFields.filter(
      (field) => field !== fieldToRemove
    );
    removePriceField(newPricefields);
  };

  console.log(dropdownOptions);

  const priceFieldList = state.currencies ? (
    <PriceFieldList
      value={state.value}
      currencies={newCurrencies}
      priceFields={state.priceFields}
      removeField={removeField}
    />
  ) : null;

  const dropdown =
    dropdownOptions.length > 0 ? (
      <Dropdown options={dropdownOptions} addField={addPriceField} />
    ) : null;

  return (
    <div>
      <p>{state.errMessage}</p>
      <Input />
      {priceFieldList}
      {dropdown}
    </div>
  );
};

export default App;
