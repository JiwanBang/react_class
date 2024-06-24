import { FC, useCallback, useState } from "react";
import { Todo as TodoItem } from "../../lib/Todo";
import TodoComp from "../../Components/Todo/Todo";

export interface IProps {}

const Todo: FC<IProps> = ({}) => {
  return <TodoComp />;
};

export default Todo;
