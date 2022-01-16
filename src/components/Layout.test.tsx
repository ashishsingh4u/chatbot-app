import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("renders Questions Tab", () => {
  render(<Layout />);
  const linkElement = screen.getAllByText(/Questions/i);
  expect(linkElement).toBeTruthy();
});

test("renders Categories Tab", () => {
  render(<Layout />);
  const linkElement = screen.getAllByText(/Categories/i);
  expect(linkElement).toBeTruthy();
});

test("renders Admin Tab", () => {
  render(<Layout />);
  const linkElement = screen.getAllByText(/Admin/i);
  expect(linkElement).toBeTruthy();
});
