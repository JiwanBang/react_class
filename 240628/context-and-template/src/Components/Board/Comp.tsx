import { FC, useContext, useEffect, useState } from "react";
import List, { ITitle } from "../List";
import { ITodoContext, TodoContext } from "../../context/todoList";

export interface IBoard {
  title: string;
  num: number;
  user: string;
  createdAt: Date;
}

const Comp = (): JSX.Element => {
  const [titleList, setTitleList] = useState<ITitle<IBoard>[]>([
    { key: "num" as keyof IBoard, name: "No." },
    { key: "title" as keyof IBoard, name: "제목", isStrech: true },
    { key: "user" as keyof IBoard, name: "작성자" },
    { key: "createdAt" as keyof IBoard, name: "작성일" },
  ]);
  const [list, setList] = useState<IBoard[]>([
    { num: 1, title: "testing", user: "stringify", createdAt: new Date() },
    { num: 1, title: "testing", user: "stringify", createdAt: new Date() },
    { num: 1, title: "testing", user: "stringify", createdAt: new Date() },
    { num: 1, title: "testing", user: "stringify", createdAt: new Date() },
    { num: 1, title: "testing", user: "stringify", createdAt: new Date() },
  ]);

  const { addList } = useContext(TodoContext) as ITodoContext;

  useEffect(() => {
    addList({
      num: 2,
      content: "피자에 맥주 먹고싶음",
      limit: "250731",
      priority: 0,
    });
  }, []);

  return <Comp />;
};

export default Comp;
