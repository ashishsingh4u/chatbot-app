import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("should render home", () => {
  render(<Home name="Home" />);
  const element: HTMLElement = screen.getByText(/Home/i);
  expect(element).toBeTruthy();
});
