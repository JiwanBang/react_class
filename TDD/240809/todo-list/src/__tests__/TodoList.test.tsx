import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../Components/TodoList";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

describe("test Todo List", () => {
  beforeEach(() => {
    render(<TodoList />);
  });
  // 모든 테스트를 진행하기 전에 돌려라
  test("render Todo List", () => {
    // render(<TodoList />);
    const titleElem = screen.getByText(/Todo List/i);
    expect(titleElem).toBeInTheDocument();
    expect(titleElem.tagName).toBe("H1");
    // titleElem의 tagName이 H1인가
    // 이하 header
  });

  test("include input Element", () => {
    // render(<TodoList />);
    const inputElem = screen.getByRole("textbox");
    //getByRole => 규칙으로써 찾을 수 있음
    expect(inputElem).toBeInTheDocument();
  });

  test("input text", () => {
    // render(<TodoList />);
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "input test" } });
    // event를 실행시켜줌(change event)
    expect(inputElem.value).toEqual("input test");
  });

  test("include input Element", () => {
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    // getByRole에서 name == innerHTML
    expect(buttonElem).toBeInTheDocument();
  });

  test("Add New Todo", () => {
    const inputElem = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "first Todo" } });

    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.click(buttonElem);

    const listItemElem = screen.getByText("first Todo");
    expect(listItemElem).toBeInTheDocument();
    expect(listItemElem.tagName).toBe("LI");

    //listitem getByRole은 name으로 확인 불가
    const listItemElem2 = screen.getByRole("listitem");
    expect(listItemElem2).toHaveTextContent("first Todo");

    // const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    // const liElem = screen.getByRole("list");
    // fireEvent.click(buttonElem, {});
    // expect(liElem).toBeInTheDocument();
  });

  test("Add Todo Array", () => {
    const temp = ["Todo_1", "Todo_2", "Todo_3"];

    for (let i = 0; i++; i < temp.length) {
      const inputElem = screen.getByRole("textbox");
      fireEvent.change(inputElem, { target: { value: temp[i] } });

      const buttonElem = screen.getByRole("button", { name: "Add Todo" });
      fireEvent.click(buttonElem);
    }

    for (let i = 0; i++; i < temp.length) {
      const listItemElem = screen.getByText(temp[i]);
      expect(listItemElem).toBeInTheDocument();
    }
  });
});
