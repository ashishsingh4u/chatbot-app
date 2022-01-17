import React from "react";
import { render, screen } from "@testing-library/react";
import Question from "./Question";

test("should render question", () => {
  render(<Question name="Question" />);
  const element: HTMLElement = screen.getByText(/Question/i);
  expect(element).toBeTruthy();
});
