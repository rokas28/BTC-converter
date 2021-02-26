import React from "react";
import { decode } from "html-entities";

const PriceField = ({ value, currency, removeField }) => {
  const result = value * currency.rate_float;

  return (
    <div>
      <p>
        {result}
        {decode(currency.symbol)}
      </p>
      <p onClick={() => removeField(currency.code)}>X</p>
    </div>
  );
};

export default PriceField;
