import { useState } from "react";

export interface IBoard {}

const Comp = (): JSX.Element => {
  const [titleList, setTitleList] = useState<IBoard[]>([]);
  return <div></div>;
};

export default Comp;
