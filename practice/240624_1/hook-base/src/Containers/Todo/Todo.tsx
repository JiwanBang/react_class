import { FC, useCallback, useState } from "react";
import { Todo as TodoItem } from "../../lib/Todo";
import TodoComp from "../../Components/Todo/Todo";

export interface IProps {}

const Todo: FC<IProps> = ({}) => {
  const [list, setList] = useState<TodoItem[]>([
    new TodoItem("test", 1, "2024-06-30"),
  ]);

  const complete = useCallback((idx: number) => {
    setList((list: TodoItem[]) => {
      list[idx].setComplete();
      return [...list];
    });
  }, []);

  const removeItem = useCallback((idx: number) => {
    setList((list: TodoItem[]) => {
      return list.filter((_, i: number) => i != idx);
    });
  }, []);

  const addItem = useCallback(
    (content: string, priority: number, limit: string) => {
      setList((list: TodoItem[]) => [
        ...list,
        new TodoItem(content, priority, limit),
      ]);
    },
    []
  );

  return (
    <TodoComp
      list={list}
      complete={complete}
      removeItem={removeItem}
      addItem={addItem}
    />
  );
};

export default Todo;
