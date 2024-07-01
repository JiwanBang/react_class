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
  } = useTodoContext();

  const item = useMemo(() => {
    return todoList[idx];
  }, [todoList]);

  //   const toggleComplete = useCallback(() => {
  //     dispatch({ type: "TOGGLETODO", payload: { id: item.id } });
  //   }, [todoList]);

  const removeTodo = useCallback(() => {
    dispatch({ type: "REMOVETODO", payload: { id: item.id } });
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
      <button onClick={() => toggle(item.id)} className="btn">
        완료
      </button>
      <button onClick={removeTodo} className="btn">
        삭제
      </button>
    </div>
  );
};

export default Item;
