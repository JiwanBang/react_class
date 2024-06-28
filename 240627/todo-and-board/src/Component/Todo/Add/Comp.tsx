import { ChangeEvent, FC } from "react";
import Add from ".";
import { Todo } from "../../../hooks/todoList";

export interface IProps {
  todo: Todo;

  changeContent({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changePriority({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changeLimit({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  submit(): void;
}

const Comp: FC<IProps> = ({
  todo,
  changeContent,
  changePriority,
  changeLimit,
  submit,
}) => {
  return (
    <div className="flex items-center gap-2 p-1 border-b-4 border-black border-double">
      <label htmlFor="todo-priority">Priority:</label>
      <input
        className="flex-1 border rounded"
        type="number"
        id="todo-priority"
        value={todo.priority}
        onInput={changePriority}
        placeholder="priority"
      />
      <input
        className="flex-1 border rounded"
        type="text"
        value={todo.content}
        onInput={changeContent}
        placeholder="todo"
      />
      <input
        className="border rounded border-gray-500"
        type="date"
        id="todo-content"
        value={todo.limit}
        onInput={changeLimit}
      />
      <button
        onClick={submit}
        className={[
          "border",
          "border-gray-400",
          "rounded",
          "p-1",
          "px-5",
          "select-none",
        ].join(" ")}
        //   onClick={() => this.add()}
      >
        추가
      </button>
    </div>
  );
};

export default Comp;
