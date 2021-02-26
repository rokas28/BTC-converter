import "./App.css";
import React, { useContext, useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";
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
    const timer = () => setInterval(fetchBtc, 60000);
    timer();

    return () => {
      clearInterval(timer);
    };
  }, []);

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

  const errMessage = state.errMessage ? (
    <p className="err">
      <FiAlertTriangle className="alert-icon" />
      {state.errMessage}
    </p>
  ) : null;

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
    <div className="app">
      {errMessage}
      <h2 className="title">BTC Converter</h2>
      <Input />
      <div className="fields">
        {priceFieldList}
        {dropdown}
      </div>
    </div>
  );
};

export default App;
