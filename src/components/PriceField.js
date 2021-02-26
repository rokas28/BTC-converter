import "./PriceField.css";
import React from "react";
import { decode } from "html-entities";
import { FiX } from "react-icons/fi";

const PriceField = ({ value, currency, removeField }) => {
  const result = value * currency.rate_float;

  const formater = new Intl.NumberFormat();
  const formatedResult =
    result < 1000000000000 ? formater.format(result.toFixed(2)) : result.toExponential(2);

  return (
    <div className="PriceField">
      <p>
        {decode(currency.symbol)}
        {formatedResult}
      </p>
      <FiX className="close" onClick={() => removeField(currency.code)} />
    </div>
  );
};

export default PriceField;
