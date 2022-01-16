import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Questions Tab", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Questions/i);
  expect(linkElement).toBeTruthy();
});

test("renders Categories Tab", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Categories/i);
  expect(linkElement).toBeTruthy();
});

test("renders Admin Tab", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Admin/i);
  expect(linkElement).toBeTruthy();
});
