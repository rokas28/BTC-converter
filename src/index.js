import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ConverterProvider } from "./context/ConverterContext";

ReactDOM.render(
  <ConverterProvider>
    <App />
  </ConverterProvider>,
  document.querySelector("#root")
);
