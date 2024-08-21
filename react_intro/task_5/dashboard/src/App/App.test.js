import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders app component", () => {
  render(<App />);
  test("renders app component", () => {
    render(<App />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    expect(screen.getByAltText("Holberton Logo")).toBeInTheDocument();
  });

  test("renders footer with correct year", () => {
    render(<App />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Holberton School`)
    ).toBeInTheDocument();
  });

  test("renders footer with correct copy", () => {
    render(<App />);
    expect(screen.getByText("All rights reserved.")).toBeInTheDocument();
  });
});
