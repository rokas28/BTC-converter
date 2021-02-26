import React from "react";
import PriceField from "./PriceField";

const PriceFieldList = ({ value, currencies, PriceFields }) => {
  const newCurrencies = Object.entries({ ...currencies });

  const renderedPriceFields = newCurrencies.map((currency) => {
    return <PriceField key={currency[0]} value={value} currency={currency[1]} />;
  });

  return <div>{renderedPriceFields}</div>;
};

export default PriceFieldList;
