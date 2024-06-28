import { useCallback, useState } from "react";
import Board from "./Components/Board";
import Todo from "./Components/Todo";
import { ITodo, TodoContext } from "./context/todoList";

function App() {
  const [list, setList] = useState<ITodo[]>([]);
  const addList = useCallback((todo: ITodo) => {
    setList((list: ITodo[]) => [...list, todo]);
  }, []);
  return (
    <TodoContext.Provider value={{ list, addList }}>
      <div>
        <Board />
        <Todo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
