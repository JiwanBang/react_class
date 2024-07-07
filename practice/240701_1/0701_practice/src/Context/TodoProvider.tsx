import {
  Dispatch,
  useReducer,
  createContext,
  ReactNode,
  useContext,
  useCallback,
} from "react";

export interface Todo {
  id: number;
  content: string;
  isComplete: boolean;
  title: string;
}

export interface TodoListState {
  todoList: Todo[];
}

const initialState: TodoListState = {
  todoList: [],
};

type Action =
  | {
      type: "ADDTODO";
      payload: { title: string; content: string };
    }
  | {
      type: "REMOVETODO";
      payload: { id: number };
    }
  | {
      type: "TOGGLETODO";
      payload: { id: number };
    };

let nowId = 0;

const reducer = (state: TodoListState, action: Action): TodoListState => {
  switch (action.type) {
    case "ADDTODO":
      nowId++;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { ...action.payload, id: nowId, isComplete: false },
        ],
      };
    case "REMOVETODO":
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo: Todo) => todo.id !== action.payload.id
        ),
      };
    case "TOGGLETODO":
      return {
        ...state,
        todoList: state.todoList.map((todo: Todo) => {
          if (todo.id !== action.payload.id) return todo;
          else return { ...todo, isComplete: !todo.isComplete };
        }),
      };
    default:
      return state;
  }
};

interface TodoContextProps {
  state: TodoListState;
  dispatch: Dispatch<Action>;
  toggle: (idx: number) => void;
  remove: (idx: number) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggle = useCallback((id: number) => {
    dispatch({ type: "TOGGLETODO", payload: { id } });
  }, []);
  const remove = useCallback((id: number) => {
    dispatch({ type: "REMOVETODO", payload: { id } });
  }, []);
  return (
    <TodoContext.Provider value={{ state, dispatch, toggle, remove }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("now loading");
  }
  return context;
};