import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should render App logo", () => {
  render(<App />);
  const element: HTMLElement[] = screen.getAllByText(/logo/i);
  expect(element).toBeTruthy();
});
