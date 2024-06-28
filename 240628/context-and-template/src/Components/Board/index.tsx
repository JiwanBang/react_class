import { useContext, useEffect } from "react";
import Comp from "./Comp";
import { ITodoContext, TodoContext } from "../../context/todoList";

const Board = (): JSX.Element => {
  // const { addList } = useContext(TodoContext) as ITodoContext;

  // useEffect(() => {
  //   addList({
  //     num: 1,
  //     content: "오늘 저녁 메뉴는",
  //     limit: "240630",
  //     priority: 1,
  //   });
  // }, []);

  return <Comp />;
};

export default Board;
