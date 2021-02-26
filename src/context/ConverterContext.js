import React, { useReducer } from "react";

const ConverterContext = React.createContext();

const converterReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BTC_VALUE":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const ConverterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(converterReducer, {
    value: null,
    fields: [],
    apiResult: null,
    errMessage: "",
  });

  const updateBtcValue = (value) => {
    dispatch({ type: "UPDATE_BTC_VALUE", payload: value });
  };

  return (
    <ConverterContext.Provider value={{ state, updateBtcValue }}>
      {children}
    </ConverterContext.Provider>
  );
};

export default ConverterContext;
