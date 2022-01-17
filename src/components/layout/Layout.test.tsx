import React from "react";
import { screen } from "@testing-library/react";
import Layout from "./Layout";
import { render } from "../../test-utils";

test("Should render Questions Tab", () => {
  render(<Layout />);
  const element: HTMLElement[] = screen.getAllByText(/Question/i);
  expect(element).toBeTruthy();
});

test("Should render Categories Tab", () => {
  render(<Layout />);
  const element: HTMLElement[] = screen.getAllByText(/Category/i);
  expect(element).toBeTruthy();
});

test("Should render Admin Tab", () => {
  render(<Layout />);
  const element: HTMLElement[] = screen.getAllByText(/Admin/i);
  expect(element).toBeTruthy();
});
