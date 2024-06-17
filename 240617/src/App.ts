import Component from "./lib/Component";

export default class App extends Component {
  constructor(parent: HTMLElement) {
    super(parent);
    this.setState({ test: 1 });
  }

  override componentDidMount(): void {
    console.log("now test");
  }

  override componentDidUpdate(): void {
    console.log("testing update");
    setTimeout(() => {
      //   this.setState({ test: this.state.test + 1 });
      this.state.test += 1;
    }, 1000);
  }
  // overloading : 적용방법 찾아볼것(같은 이름인데 다른 메서드)
  override render() {
    return `<div>
                ${this.state?.test}
            </div>`;
  }
}
