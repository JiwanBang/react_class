import { FC } from "react";
import { Todo as TodoItem } from "../../lib/Todo";
import Item from "./Item";

const List = () => {
  const {
    state: { todoList },
  } = useTodoContext;
  return (
    <div>
      {todoList.map((_, idx: number) => (
        <Item key={idx} idx={idx} />
      ))}
    </div>
  );
};

export default List;
