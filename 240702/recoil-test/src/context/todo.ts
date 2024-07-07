import axios from "axios";
import { atom, selector, useRecoilValue } from "recoil";

export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}

// atom : state
// Recoil의 store에 속해있는 작은 저장소
export const todoListState = atom<ITodo[]>({
  key: "todoListState",
  default: [],
});

// initailState
// useState 랑 사용법이 거의 흡사

export const todoList = selector<ITodo[]>({
  key: "todoList",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoFilter);
    switch (filter) {
      case "complete":
        return list.filter((item) => item.isComplete);
      case "progress":
        return list.filter((item) => !item.isComplete);
      case "all":
      // return(break)가 없으므로 default까지 내려옴
      default:
        return list;
    }
  },
});

const todoFilterState = atom<string>({
  key: "todoFilterState",
  default: "all",
});

export const todoFilter = selector<string>({
  key: "todoFilter",
  get: ({ get }) => {
    return get(todoFilterState);
  },
  set: ({ set }, value = "all") => {
    set(todoFilterState, value);
  },
});

// selector: reducer + action?

export const todoCount = selector<number>({
  key: "todoCount",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoFilter);
    switch (filter) {
      case "complete":
        return list.filter((item) => item.isComplete).length;
      case "progress":
        return list.filter((item) => !item.isComplete).length;
      case "all":
      // return(break)가 없으므로 default까지 내려옴
      default:
    }
    return list.length;
  },
});

export const getServerList = selector<ITodo[]>({
  key: "getServerList",
  get: async () => {
    const { data } = await axios.get("http://localhost:8000/api/todo/1");
    console.log(data);
    return data;
  },
});
