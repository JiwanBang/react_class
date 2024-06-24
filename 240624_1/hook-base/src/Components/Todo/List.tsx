import { FC } from "react";
import { Todo as TodoItem } from "../../lib/Todo";

export interface IProps {
  list: TodoItem[];
  complete(idx: number): void;
  removeItem(idx: number): void;
}

const List: FC<IProps> = ({ list, complete, removeItem }) => {
  console.log(list);
  return <div></div>;
};

export default List;
