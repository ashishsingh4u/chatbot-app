import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./test-utils";

test("Should render App logo", () => {
  render(<App />);
  const element: HTMLElement[] = screen.getAllByText(/logo/i);
  expect(element).toBeTruthy();
});
