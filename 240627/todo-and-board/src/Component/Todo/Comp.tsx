import { FC } from "react";
import { Todo as ITodo } from "../../hooks/todoList";
import Item from "./Item";
import Add from "./Add";

export interface IProps {
  list: Array<ITodo>;
  removeTodo: (todo: ITodo) => void;
  completeTodo: (todo: ITodo) => void;
  addTodo: (todo: ITodo) => void;
}

const Todo: FC<IProps> = ({ list, addTodo, removeTodo, completeTodo }) => {
  return (
    <div>
      {/* <Add addTodo={addTodo} /> */}
      {list.map((item: ITodo, idx: number) => (
        <Item
          key={idx}
          todo={item}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          idx={idx}
        />
      ))}
    </div>
  );
};

export default Todo;
