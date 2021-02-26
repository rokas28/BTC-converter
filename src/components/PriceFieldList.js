import React from "react";
import PriceField from "./PriceField";

const PriceFieldList = ({ value, currencies, priceFields, removeField }) => {
  const renderedPriceFields = currencies.map((currency) => {
    if (!priceFields.includes(currency[0])) {
      return null;
    }
    return (
      <PriceField
        key={currency[0]}
        value={value}
        currency={currency[1]}
        removeField={removeField}
      />
    );
  });

  return <div>{renderedPriceFields}</div>;
};

export default PriceFieldList;
