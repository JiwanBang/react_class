import { FC } from "react";
import { useTodoContext } from "../Context/TodoProvider";
import Item from "./Item";

const List = (): JSX.Element => {
  const {
    state: { todoList },
  } = useTodoContext();
  return (
    <div>
      {todoList.map((_, idx: number) => (
        <Item key={idx} idx={idx} />
      ))}
    </div>
  );
};

export default List;
