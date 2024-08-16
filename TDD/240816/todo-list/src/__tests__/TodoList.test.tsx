import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";

import TodoList from "../Components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import instance from "../lib/axios";

const mock = new MockAdapter(instance);
const client = new QueryClient();

describe("test Todo List", () => {
  beforeEach(() => {
    const data = [{ id: 1, title: "test todo list", isCompleted: false }];
    mock.onGet("/todo").reply(200, data);
    mock.onPost("/todo", {}).reply(201, { title: "test todo list" });

    render(
      <QueryClientProvider client={client}>
        <TodoList />
      </QueryClientProvider>
    );
  });

  test("render Todo List", async () => {
    const titleElem = screen.getByText(/NOW LOADING/i);
    expect(titleElem).toBeInTheDocument();
    expect(titleElem.tagName).toBe("DIV");

    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    expect(screen.getByText(/test todo list/i)).toBeInTheDocument();
  });

  test("Include Input Element", async () => {
    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    const inputElem = screen.getByRole("textbox");
    expect(inputElem).toBeInTheDocument();
  });

  test("Input Text", async () => {
    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "input test" } });
    expect(inputElem.value).toEqual("input test");
  });

  test("add Todo List", async () => {
    const data = [{ id: 1, title: "test todo list", isCompleted: false }];
    mock
      .onGet("/todo")
      .reply(200, [data, { id: 1, title: "first Todo", isCompleted: false }]);

    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "test input test" } });
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.click(buttonElem);

    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
      expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("");
    });

    const listItemElem = screen.getByText("first Todo");
    expect(listItemElem).toBeInTheDocument();
    expect(listItemElem.tagName).toBe("LI");
  });
});
