import { ChangeEvent, FC, useCallback, useState } from "react";
import { useTodoContext } from "../Context/TodoProvider";

const Add = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);
  const changeContent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);

  const { dispatch } = useTodoContext();
  const addTodo = () => {
    dispatch({
      type: "ADDTODO",
      payload: { title, content },
    });
  };
  return (
    <div>
      <input type="text" onInput={changeTitle} placeholder="title" />
      <input type="text" onInput={changeContent} placeholder="content" />

      <button className="btn" onClick={addTodo}>
        추가
      </button>
    </div>
  );
};

export default Add;
