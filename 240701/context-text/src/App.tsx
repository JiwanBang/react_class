import React, { useCallback, useState } from "react";
import { Todo, useTodoContext } from "./Context/TodoProvider";
import List from "./Components/List";
import Add from "./Components/Add";
import "./index.scss";

const App = (): JSX.Element => {
  // const [list, setList]: [
  //   string[],
  //   React.Dispatch<React.SetStateAction<string[]>>
  // ] = useState<string[]>([]);

  // const { state, dispatch } = useTodoContext();
  // console.log(state);

  // const addTodo = useCallback(() => {
  //   dispatch({
  //     type: "ADDTODO",
  //     payload: { id: 1, content: "testing", isComplete: false },
  //   });
  // }, []);

  return (
    <div>
      <Add />
      <List />
      {/* <button className="btn" onClick={addTodo}>
        추가
      </button>
      {state.todoList.map((item: Todo, idx: number) => (
        <div key={idx}>{item.content}</div>
      ))} */}
    </div>
  );
};

export default App;
