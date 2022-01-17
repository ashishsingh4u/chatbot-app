import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("Should render Questions Tab", () => {
  render(<Layout />);
  const element: HTMLElement[] = screen.getAllByText(/Questions/i);
  expect(element).toBeTruthy();
});

test("Should render Categories Tab", () => {
  render(<Layout />);
  const element: HTMLElement[] = screen.getAllByText(/Categories/i);
  expect(element).toBeTruthy();
});

test("Should render Admin Tab", () => {
  render(<Layout />);
  const element: HTMLElement[] = screen.getAllByText(/Admin/i);
  expect(element).toBeTruthy();
});
