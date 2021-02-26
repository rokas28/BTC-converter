import React, { useReducer } from "react";
import api from "../api/api";

const ConverterContext = React.createContext();

const converterReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BTC_VALUE":
      return { ...state, value: action.payload };
    case "FETCH_BTC":
      return { ...state, currencies: action.payload };
    case "ADD_ERR":
      return { ...state, errMessage: action.payload };
    case "ADD_PRICE_FIELD":
      return { ...state, priceFields: [...state.priceFields, action.payload] };
    case "REMOVE_PRICE_FIELD":
      return { ...state, priceFields: action.payload };
    default:
      return state;
  }
};

export const ConverterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(converterReducer, {
    value: "",
    priceFields: [],
    currencies: null,
    errMessage: "",
  });

  const updateBtcValue = (value) => {
    dispatch({ type: "UPDATE_BTC_VALUE", payload: value });
  };

  const fetchBtc = async () => {
    try {
      const { data } = await api.get("/bpi/currentprice.json");
      dispatch({ type: "FETCH_BTC", payload: data.bpi });
    } catch (err) {
      dispatch({ type: "ADD_ERR", payload: err.message });
    }
  };

  const addPriceField = (priceField) => {
    dispatch({ type: "ADD_PRICE_FIELD", payload: priceField });
  };

  const removePriceField = (priceField) => {
    dispatch({ type: "REMOVE_PRICE_FIELD", payload: priceField });
  };

  return (
    <ConverterContext.Provider
      value={{
        state,
        updateBtcValue,
        fetchBtc,
        addPriceField,
        removePriceField,
      }}
    >
      {children}
    </ConverterContext.Provider>
  );
};

export default ConverterContext;
