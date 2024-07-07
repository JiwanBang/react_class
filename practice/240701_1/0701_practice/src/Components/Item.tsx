import { useCallback, useMemo } from "react";
import { useTodoContext } from "../Context/TodoProvider";

interface IProps {
  idx: number;
}

const Item = ({ idx }: IProps): JSX.Element => {
  const {
    state: { todoList },
    dispatch,
    toggle,
    remove,
  } = useTodoContext();

  const item = useMemo(() => {
    return todoList[idx];
  }, [todoList]);

  return (
    <div
      className={[
        "flex",
        "justify-between",
        "px-1",
        "py-1",
        "border-b-[2px]",
        "border-black-500",
        "border-dotted",
      ].join(" ")}
    >
      <div>{item.id}</div>
      <div>{item.title}</div>
      <div>{item.content}</div>
      <div>{item.isComplete ? "완료" : "진행중"}</div>
      <button onClick={() => toggle(item.id)}>완료</button>
      <button onClick={() => remove(item.id)}>삭제</button>
    </div>
  );
};

export default Item;
