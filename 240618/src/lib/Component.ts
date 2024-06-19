type State = {
  [key: string]: any;
};
export interface IComponent {
  setState(newState: State): void;
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentWillUnmount(): void;
  render(): string;
}

export default class Component {
  protected state: State = {};
  private parent: HTMLElement;
  // React에서 가장 기초되는 단위 <<어떤 단위?
  // React = frontend를 위한 library/ front의 단위 == element(영역)
  // React의 중요 개념: VDOM, state
  // 필요한 메서드는?

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.rerender();
    this.componentDidMount();
  }

  setState(newState: State): void {
    let isNewState = false;
    Object.keys(newState).forEach((key: keyof State) => {
      if (this.state[key] != newState[key]) {
        isNewState = true;
      }
    });
    if (isNewState) {
      this.state = { ...this.state, ...newState };
      this.rerender();
      this.componentDidUpdate();
    }
  }
  componentDidMount(): void {}
  componentDidUpdate(): void {}
  componentWillUnmount(): void {}
  render(): string {
    return "";
  }
  private rerender(): void {
    this.parent.innerHTML = this.render();
  }
}
