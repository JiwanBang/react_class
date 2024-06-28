import { FC } from "react";
import "./board.css";
import { LinkButton } from "../../App";

const Comp: FC<{ list: IBoard[] }> = ({ list }) => {
  return (
    <ul>
      <BoardRowTitle
        title={{
          id: "No. ",
          title: "제목",
          user: "작성자",
          createdAt: "작성 날짜",
          count: "추천수",
        }}
      />
      {list.map((board: IBoard, idx: number) => {
        return (
          <BoardRowItem
            key={idx}
            board={{ ...board, id: idx + 1 }}
            isEven={idx % 2 == 1}
          />
        );
      })}
      {/* <BoardRowItem
        board={{
          id: 1,
          title: "오늘의 점심은 싸다김밥 라볶이+돈가스김밥",
          user: "방지완",
          createdAt: new Date(),
          likeCount: 10,
          disCount: 20,
        }}
      />
      <BoardRowItem
        board={{
          id: 2,
          title: "내일의 저녁은",
          user: "방지완",
          createdAt: new Date(),
          likeCount: 10,
          disCount: 20,
        }}
      /> */}
    </ul>
  );
};

export interface IBoard {
  id: number;
  title: string;
  user: string;
  createdAt: Date;
  likeCount: number;
  disCount: number;
}

const BoardRow: FC<{
  board: { [key: string]: string };
  isTitle?: boolean;
  isEven?: boolean;
}> = ({ board, isTitle = false, isEven = false }) => {
  return (
    <li className={`border-b border-black ${isEven ? "bg-gray-200" : ""}`}>
      <ul className="flex">
        <li className="px-2 py-1 w-12 text-center border-r border-dotted border-gray-500">
          {board.id}
        </li>
        <li
          className={`px-2 py-1 flex-1 ${
            isTitle && "isTitle"
          } truncate border-r border-dotted border-gray-500`}
        >
          {board.title}
        </li>
        <li className="px-2 py-1 w-20 text-center border-r border-dotted border-gray-500">
          {board.user}
        </li>
        {/* <li className="px-2 py-1">{board.createdAt}</li> */}
        <li className="px-2 py-1 w-16 text-center">{board.Count}</li>
        <li className="px-2 py-1 w-16 text-center">
          <LinkButton path="/remove">삭제</LinkButton>
        </li>
      </ul>
    </li>
  );
};

const BoardRowTitle: FC<{ title: { [key: string]: string } }> = ({ title }) => {
  return <BoardRow board={title} isTitle={true} />;
};

const BoardRowItem: FC<{ board: IBoard; isEven?: boolean }> = ({
  board,
  isEven = false,
}) => {
  return (
    <BoardRow
      board={{
        id: board.id.toString(),
        title: board.title,
        user: board.user,
        createdAt: board.createdAt.toLocaleString(),
        Count: (board.likeCount - board.disCount).toString(),
      }}
      isEven={isEven}
    />
  );
};

export default Comp;
