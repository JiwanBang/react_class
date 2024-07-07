import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}
const keys = ["List"];

function App() {
  const { data, isError, isPending } = useQuery<ITodo[]>({
    queryKey: ["List"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/api/todo/1");
      console.log(data);
      // throw new Error("test");
      return data;
    },
  });
  console.log(data);

  // const query = useQuery<ITodo[]>({
  //   queryKey: ["todo", "list", "two"],
  //   queryFn: async () => {
  //     const { data } = await axios.get("http://localhost:8000/api/todo/1");
  //     console.log(data);
  //     // throw new Error("test");
  //     return data;
  //   },
  // });
  const { mutate } = useMutation({
    mutationKey: ["todo"],
    mutationFn: async () => {
      const { data } = await axios.post("http://localhost:8000/api/todo", {});
      return data;
    },
  });
  // useEffect(() => {
  //   mutate(add);
  // }, [add]);

  // const [page, setPage] = useState(1);
  // const { data, isError, isPending, mutate } = useMutation({
  //   mutationKey: ["todo", "list"],
  //   mutationFn: async (page: number) => {
  //     const { data } = await axios.get(
  //       `http://localhost:8000/api/todo/${page}`
  //     );
  //     console.log(data);
  //     // throw new Error("test");
  //     return data as ITodo[];
  //   },
  // });
  // useEffect(() => {
  //   mutate(page);
  // }, [page]);

  if (isPending) return <h1>now Loading...</h1>;
  if (isError) return <h1>plz retry</h1>;

  return (
    <div>
      {data?.map((item: ITodo) => (
        <div>{item.content} </div>
      ))}
      {/* <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        버튼
      </button> */}
      <div>
        <input type="text" id="content" name="content" placeholder="content" />
        <button
          onClick={() => {
            mutate();
          }}
        >
          add
        </button>
      </div>
    </div>
    // <div>
    //   TanStack React-Query @types/axios
    //   <br />
    //   npm i @tanstack/react-query
    // </div>
  );
}

export default App;
