import { getList, ITodo } from "../lib/todoAxios";
import AddTodo from "./Add";
import { useQuery } from "@tanstack/react-query";

const TodoList = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["get", "todo"],
    queryFn: getList,
  });

  if (isLoading) return <div>NOW LOADING</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo />
      <ul>
        {data?.map((item: ITodo, idx: number) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
