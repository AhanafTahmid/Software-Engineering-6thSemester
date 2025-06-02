import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("codesweetly test heading", () => {
  render(<App />);
  expect(screen.getByRole("heading")).
  toHaveTextContent(/codesweetly test/i);
});