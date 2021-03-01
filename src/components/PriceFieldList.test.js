import React from "react";
import renderer from "react-test-renderer";
import PriceFieldList from "./PriceFieldList";

const currency = [
  [
    "USD",
    {
      code: "USD",
      symbol: "&#36;",
      rate: "47,520.6658",
      description: "United States Dollar",
      rate_float: 47315.0247,
    },
  ],
  [
    "GBP",
    {
      code: "GBP",
      symbol: "&pound;",
      rate: "34,023.3156",
      description: "British Pound Sterling",
      rate_float: 33926.6234,
    },
  ],
  [
    "EUR",
    {
      code: "EUR",
      symbol: "&euro;",
      rate: "39,370.2564",
      description: "Euro",
      rate_float: 39303.5501,
    },
  ],
];

it("shoud render PriceFieldList with USD field with right currency", () => {
  const value = 2;
  const priceFields = ["USD"];

  const tree = renderer
    .create(
      <PriceFieldList
        value={value}
        currencies={currency}
        priceFields={priceFields}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("shoud render PriceFieldList with GBP field with right currency", () => {
  const value = 2;
  const priceFields = ["GBP"];

  const tree = renderer
    .create(
      <PriceFieldList
        value={value}
        currencies={currency}
        priceFields={priceFields}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("shoud render PriceFieldList with  EUR field with right currency", () => {
  const value = 2;
  const priceFields = ["EUR"];

  const tree = renderer
    .create(
      <PriceFieldList
        value={value}
        currencies={currency}
        priceFields={priceFields}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("shoud render PriceFieldList with USD and GBP fields with right currencies", () => {
  const value = 2;
  const priceFields = ["USD", "GBP"];

  const tree = renderer
    .create(
      <PriceFieldList
        value={value}
        currencies={currency}
        priceFields={priceFields}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("shoud render PriceFieldList with USD and EUR fields with right currencies", () => {
  const value = 2;
  const priceFields = ["USD", "EUR"];

  const tree = renderer
    .create(
      <PriceFieldList
        value={value}
        currencies={currency}
        priceFields={priceFields}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("shoud render PriceFieldList with GBP and EUR fields with right currencies", () => {
  const value = 2;
  const priceFields = ["GBP", "EUR"];

  const tree = renderer
    .create(
      <PriceFieldList
        value={value}
        currencies={currency}
        priceFields={priceFields}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("shoud render PriceFieldList with USD, GBP and EUR fields with right currencies", () => {
  const value = 2;
  const priceFields = ["USD", "GBP", "EUR"];

  const tree = renderer
    .create(
      <PriceFieldList
        value={value}
        currencies={currency}
        priceFields={priceFields}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
