import "./index.scss";
import Test from "./Compnents/Test";
import React, { ChangeEvent, useEffect, useState } from "react";

//useEffect => class에서 component DidUpdate/DidMount/WillUnmount

function App(): JSX.Element {
  // let isMount = false;
  const [test, setTest]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
    // Dispatch: 액션을 실행하는 메서드 타입
    // SetStateAction: 상태값을 업데이트하는 액션의 메서드 타입
  ] = useState<boolean>(true);
  // useState => Hook(Class의 기능을 func에서 쓸 수 있게 대체함)
  // use***** => 함수형 컴포넌트에서 사용하는 Hook

  const [test1, setTest1] = useState<string>("");

  // componentDidMount
  // componentDidUpdate
  // 항상 실행된다. render 돌릴때마다
  // useEffect(() => {
  // console.log("useEffect");
  // });

  // componentDidMount
  useEffect(() => {
    console.log("mount");
  }, []);

  // componentDidMount
  // componentDidUpdate
  useEffect(() => {
    console.log("testing1");
    return () => {
      console.log("testing???");
    };
  }, [test1]);
  // 2번째 인자인 state[]이 변경되었을 때 실행된다

  return (
    <div className="container mx-auto">
      <div
        className="border"
        onClick={() => {
          setTest(!test);
        }}
      >
        test
      </div>
      {test && <Test></Test>}
      <input
        type="text"
        value={test1}
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          setTest1(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
