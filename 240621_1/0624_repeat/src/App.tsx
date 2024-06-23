import React, { useEffect, useState } from "react";
import "./index.scss";

function App(): JSX.Element {
  // const [test, setTest]: [boolean, React.SetStateAction<boolean>] =
  //   useState<boolean>(true);

  const [test1, setTest1] = useState<string>("");

  // componentDidMount
  useEffect(() => {
    console.log("mount");
  }, []);

  // componentDidMount
  // ComponentDidUpdate

  return (
    <div
      className="container w-3 h-3 border border-black"
      onClick={() => {
        // setTest1(!test);
      }}
    ></div>
  );
}
export default App;
