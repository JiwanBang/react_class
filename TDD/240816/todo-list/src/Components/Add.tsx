import { ChangeEvent, useCallback, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, getList } from "../lib/todoAxios";
import { ITodo } from "../lib/todoAxios";

const AddTodo = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const client = useQueryClient();

  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setInputValue(value);
    },
    []
  );

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async () => {
      const todo = await addTodo({ title: inputValue });
      return todo;
    },
    onSuccess: () => {
      setInputValue("");
      client.invalidateQueries({ queryKey: ["get", "todo"] });
    },
    onError: () => {
      console.log("에러 발생");
    },
  });

  // const addHandler = useCallback(() => {
  //   // setList((state) => [...state, inputValue]);
  //   addTodo({ title: inputValue });
  //   setInputValue("");
  // }, [inputValue]);

  if (isPending) return <div>NOW LOADING</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button
        onClick={() => {
          mutate();
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
