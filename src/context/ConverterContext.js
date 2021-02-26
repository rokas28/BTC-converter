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

  return (
    <ConverterContext.Provider value={{ state, updateBtcValue, fetchBtc }}>
      {children}
    </ConverterContext.Provider>
  );
};

export default ConverterContext;
