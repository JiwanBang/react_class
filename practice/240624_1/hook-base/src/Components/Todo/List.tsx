import { FC } from "react";
import { Todo as TodoItem } from "../../lib/Todo";
import Item from "./Item";

export interface IProps {
  list: TodoItem[];
  complete(idx: number): void;
  removeItem(idx: number): void;
}

const List: FC<IProps> = ({ list, complete, removeItem }) => {
  console.log(list);
  return (
    <div>
      {list.map((item: TodoItem, idx: number) => (
        <Item
          key={idx}
          item={item}
          idx={idx}
          removeItem={() => removeItem(idx)}
          complete={() => complete(idx)}
        />
      ))}
    </div>
  );
};

export default List;
