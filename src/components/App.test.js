import React from "react";
import { mount } from "enzyme";
import App from "./App";
import ConverterContext from "../context/ConverterContext";

it("shoud render App with error message", () => {
  const state = {
    value: 2,
    priceFields: ["USD", "GBP"],
    currencies: {
      EUR: {
        code: "EUR",
        symbol: "&euro;",
        rate: "39,668.8425",
        description: "Euro",
        rate_float: 39668.8425,
      },
      GBP: {
        code: "GBP",
        symbol: "&pound;",
        rate: "34,237.6401",
        description: "British Pound Sterling",
        rate_float: 34237.6401,
      },
      USD: {
        code: "USD",
        symbol: "&#36;",
        rate: "47,777.4957",
        description: "United States Dollar",
        rate_float: 47777.4957,
      },
    },
    errMessage: "Network Error",
  };
  const fetchBtc = jest.fn();
  const addPriceField = jest.fn();
  const removePriceField = jest.fn();

  const wrapper = mount(
    <ConverterContext.Provider
      value={{ state, fetchBtc, addPriceField, removePriceField }}
    >
      <App />
    </ConverterContext.Provider>
  );

  expect(wrapper.find(".err").length).toEqual(1);
});

it("shoud not render App with error message", () => {
  const state = {
    value: 2,
    priceFields: ["USD", "GBP"],
    currencies: {
      EUR: {
        code: "EUR",
        symbol: "&euro;",
        rate: "39,668.8425",
        description: "Euro",
        rate_float: 39668.8425,
      },
      GBP: {
        code: "GBP",
        symbol: "&pound;",
        rate: "34,237.6401",
        description: "British Pound Sterling",
        rate_float: 34237.6401,
      },
      USD: {
        code: "USD",
        symbol: "&#36;",
        rate: "47,777.4957",
        description: "United States Dollar",
        rate_float: 47777.4957,
      },
    },
    errMessage: "",
  };
  const fetchBtc = jest.fn();
  const addPriceField = jest.fn();
  const removePriceField = jest.fn();

  const wrapper = mount(
    <ConverterContext.Provider
      value={{ state, fetchBtc, addPriceField, removePriceField }}
    >
      <App />
    </ConverterContext.Provider>
  );

  expect(wrapper.find(".err").length).toEqual(0);
});

it("shoud render App with USD and GBP price fields", () => {
  const state = {
    value: 2,
    priceFields: ["USD", "GBP"],
    currencies: {
      EUR: {
        code: "EUR",
        symbol: "&euro;",
        rate: "39,668.8425",
        description: "Euro",
        rate_float: 39668.8425,
      },
      GBP: {
        code: "GBP",
        symbol: "&pound;",
        rate: "34,237.6401",
        description: "British Pound Sterling",
        rate_float: 34237.6401,
      },
      USD: {
        code: "USD",
        symbol: "&#36;",
        rate: "47,777.4957",
        description: "United States Dollar",
        rate_float: 47777.4957,
      },
    },
    errMessage: "",
  };

  const fetchBtc = jest.fn();
  const addPriceField = jest.fn();
  const removePriceField = jest.fn();

  const wrapper = mount(
    <ConverterContext.Provider
      value={{ state, fetchBtc, addPriceField, removePriceField }}
    >
      <App />
    </ConverterContext.Provider>
  );

  expect(wrapper.find(".PriceField").length).toEqual(2);
});

it("shoud render plus sign to add price field", () => {
  const state = {
    value: 2,
    priceFields: ["USD", "GBP"],
    currencies: {
      EUR: {
        code: "EUR",
        symbol: "&euro;",
        rate: "39,668.8425",
        description: "Euro",
        rate_float: 39668.8425,
      },
      GBP: {
        code: "GBP",
        symbol: "&pound;",
        rate: "34,237.6401",
        description: "British Pound Sterling",
        rate_float: 34237.6401,
      },
      USD: {
        code: "USD",
        symbol: "&#36;",
        rate: "47,777.4957",
        description: "United States Dollar",
        rate_float: 47777.4957,
      },
    },
    errMessage: "",
  };

  const fetchBtc = jest.fn();
  const addPriceField = jest.fn();
  const removePriceField = jest.fn();

  const wrapper = mount(
    <ConverterContext.Provider
      value={{ state, fetchBtc, addPriceField, removePriceField }}
    >
      <App />
    </ConverterContext.Provider>
  );

  expect(wrapper.find(".button").length).toEqual(1);
});

it("shoud not render plus sign to add price field", () => {
  const state = {
    value: 2,
    priceFields: ["USD", "GBP", "EUR"],
    currencies: {
      EUR: {
        code: "EUR",
        symbol: "&euro;",
        rate: "39,668.8425",
        description: "Euro",
        rate_float: 39668.8425,
      },
      GBP: {
        code: "GBP",
        symbol: "&pound;",
        rate: "34,237.6401",
        description: "British Pound Sterling",
        rate_float: 34237.6401,
      },
      USD: {
        code: "USD",
        symbol: "&#36;",
        rate: "47,777.4957",
        description: "United States Dollar",
        rate_float: 47777.4957,
      },
    },
    errMessage: "",
  };

  const fetchBtc = jest.fn();
  const addPriceField = jest.fn();
  const removePriceField = jest.fn();

  const wrapper = mount(
    <ConverterContext.Provider
      value={{ state, fetchBtc, addPriceField, removePriceField }}
    >
      <App />
    </ConverterContext.Provider>
  );

  expect(wrapper.find(".button").length).toEqual(0);
});
