// export default function Test(): JSX.Element {
//   return <div>now Testing</div>;
// }

import { FC, useEffect, useState } from "react";

const Test: FC = () => {
  const [test, _] = useState<string>("now Testing");

  useEffect(() => {
    console.log("test Component Mounted");
    return () => {
      console.log("Test Component Will Mount");
    };
    // return으로 반환하는 method가 componentWillUnMount이다
    // 언제 쓰면 좋을까? socket 통신(연결을 close해야함)
  }, []);

  return <div>{test}</div>;
};

export default Test;
