import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("full test", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("list test", () => {
    const tempData = [1, 2, 3];
    render(<App list={tempData} />);
    // 숫자 배열로 되어있는 list라는 props를 받고 시작
    tempData.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
