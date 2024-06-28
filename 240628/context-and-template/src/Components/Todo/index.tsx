import { useContext, useEffect, useMemo, useState } from "react";
import List, { ITitle } from "../List";
import { ITodo, ITodoContext, TodoContext } from "../../context/todoList";
// interface ITodo {
//   num: number;
//   content: string;
//   priority: number;
//   limit: string;
// }

const Todo = (): JSX.Element => {
  const { list } = useContext(TodoContext) as ITodoContext;
  const titleList: ITitle<ITodo>[] = useMemo(
    () => [
      { key: "num" as keyof ITodo, name: "No." },
      { key: "content" as keyof ITodo, name: "내용", isStrech: true },
      { key: "priority" as keyof ITodo, name: "우선순위" },
      { key: "limit" as keyof ITodo, name: "마감일" },
    ],
    []
  );

  // useEffect(() => {
  //   addList({
  //     num: 1,
  //     content: "오늘 저녁 메뉴는",
  //     limit: "240630",
  //     priority: 1,
  //   });
  // }, []);

  //   const [list, setList] = useState<ITodo[]>([
  //     { num: 1, content: "brbr", priority: 1, limit: "1" },
  //     { num: 1, content: "brbr", priority: 1, limit: "1" },
  //     { num: 1, content: "brbr", priority: 1, limit: "1" },
  //     { num: 1, content: "brbr", priority: 1, limit: "1" },
  //     { num: 1, content: "brbr", priority: 1, limit: "1" },
  //   ]);

  return <List list={list} titleList={titleList} />;
};

export default Todo;
