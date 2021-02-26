import React from "react";
import { decode } from "html-entities";

const PriceField = ({ value, currency }) => {
  const result =  value * currency.rate_float;
  
  console.log(currency);
  return (
    <div>
      <p>
        {result}
        {decode(currency.symbol)}
      </p>
    </div>
  );
};

export default PriceField;
