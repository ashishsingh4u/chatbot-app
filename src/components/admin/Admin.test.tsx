import React from "react";
import { render, screen } from "@testing-library/react";
import Admin from "./Admin";

test("should render admin", () => {
  render(<Admin name="Admin" />);
  const element: HTMLElement = screen.getByText(/Admin/i);
  expect(element).toBeTruthy();
});
