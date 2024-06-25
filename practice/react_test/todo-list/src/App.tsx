import React from "react";
import Todo, { ITodo } from "./Components/Todo";
import Add from "./Components/Add";

interface IProps {}
interface IState<T> {
  list: T[];
}

// <> <<= Generic(꺽쇠 안에 들어간)
class App extends React.Component<IProps, IState<ITodo>> {
  constructor(props: IProps) {
    super(props);
    this.state = { list: [] };
  }

  // componentDidMount(): void {
  //   this.setState((state: IState<ITodo>) => ({
  //     ...state,
  //     list: [
  //       ...state.list,
  //       { content: "과거의 점심은?", isComplete: false },
  //       { content: "현재의 점심은?", isComplete: false },
  //       { content: "미래의 점심은?", isComplete: false },
  //       { content: "언젠가의 점심은?", isComplete: false },
  //       { content: "오늘의 점심은?", isComplete: false },
  //     ],
  //   }));
  // }

  add = (content: string): void => {
    this.setState((state: IState<ITodo>) => ({
      ...state,
      list: [...state.list, { content, isComplete: false }],
    }));
  };

  complete(idx: number) {
    this.setState((state: IState<ITodo>) => {
      state.list[idx].isComplete = !state.list[idx].isComplete;

      // return state;
      return { ...state, list: [...state.list] };
    });
  }

  remove(idx: number) {
    this.setState((state: IState<ITodo>) => ({
      ...state,
      list: state.list.filter((_: ITodo, i: number) => i != idx),
    }));
  }

  render(): React.ReactNode {
    return (
      <div>
        <Add add={this.add}></Add>
        {/* {['string','string','string','string']} */}
        <div>
          {this.state.list.map((item: ITodo, idx: number) => (
            <Todo
              key={idx}
              item={item}
              id={`todo-complete-${idx}`}
              complete={() => this.complete(idx)}
              remove={() => this.remove(idx)}
            ></Todo>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
