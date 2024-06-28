import { ChangeEvent, FC, useCallback, useState } from "react";
import { Todo } from "../../../hooks/todoList";
import Comp from "./Comp";

export interface IProps {
  todo: Todo;
  // addTodo: (todo: Todo) => void;
  addTodo: (todo: Todo) => void;
}

const Add: FC<IProps> = ({ todo, addTodo }) => {
  const [content, setContent] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [limit, setLimit] = useState<string>("");

  const changeContent = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setContent(value);
    },
    []
  );

  const changeLimit = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setLimit(value);
    },
    [limit]
  );

  const changePriority = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const temp = +value;
      if (!isNaN(temp)) setPriority(temp);
    },
    []
  );

  const submit = useCallback(() => {
    addTodo(todo);
    setContent("");
    setPriority(0);
    setLimit("");
  }, [content, priority, limit]);

  return (
    <Comp
      todo={{ ...todo, content, priority, limit }}
      changeContent={changeContent}
      changePriority={changePriority}
      changeLimit={changeLimit}
      submit={submit}
    />
  );
};

export default Add;
