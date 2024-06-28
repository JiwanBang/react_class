import { FC } from "react";
import { Todo } from "../../../hooks/todoList";

export interface IProps {
  todo: Todo;
  removeTodo: () => void;
  completeTodo: () => void;
  idx: number;
}
const Comp: FC<IProps> = ({ todo, removeTodo, completeTodo, idx }) => {
  return (
    <div
      className={[
        "flex justify-between",
        "items-center",
        "p-1",
        "border-b",
        "border-dashed",
        "border-black",
      ].join(" ")}
    >
      <div>{todo.isComplete}</div>
      <div>{todo.content}</div>
      <div>{todo.priority}</div>
      <div>{todo.createdAt}</div>
      <div>{todo.limit}</div>
      <div>
        <label
          htmlFor={`item-${idx}`}
          className={[
            "border",
            "border-gray-400",
            "rounded",
            "p-1",
            "px-2",
            "has-[:checked]:bg-yellow-300",
            "has-[:checked]:text-red-700",
            "select-none",
          ].join(" ")}
        >
          {todo.isComplete ? "완료" : "진행중"}
          <input
            id={`item-${idx}`}
            type="checkbox"
            className="hidden"
            checked={todo.isComplete}
            onChange={completeTodo}
          />
        </label>
      </div>

      <button
        onClick={removeTodo}
        className="border border-gray-400 rounded bg-gray-200 p-1 px-2"
      >
        삭제
      </button>
    </div>
  );
};

export default Comp;
