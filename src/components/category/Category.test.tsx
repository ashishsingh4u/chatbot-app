import React from "react";
import { render, screen } from "@testing-library/react";
import Category from "./Category";

test("should render category", () => {
  render(<Category name="Category" />);
  const element: HTMLElement = screen.getByText(/Category/i);
  expect(element).toBeTruthy();
});
