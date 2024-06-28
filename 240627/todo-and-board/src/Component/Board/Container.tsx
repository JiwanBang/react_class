import { FC, useState } from "react";
import Comp, { IBoard } from "./Component";

const Board: FC = () => {
  const [list, setList] = useState<IBoard[]>([
    {
      id: 1,
      title: "오늘의 점심은 싸다김밥 라볶이+돈가스김밥",
      user: "방지완",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
  ]);
  return <Comp list={list} />;
};

export default Board;
