import { FC, useState } from "react";

export interface ICounter {}

const Counter: FC<ICounter> = ({}) => {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
    console.log(+1);
  };
  const Decrease = () => {
    setNumber(number - 1);
    console.log(-1);
  };

  return (
    <div className="items-center">
      <div className="w-[1024px] ">
        <h1 className="">{number}</h1>
        <div className="flex items-center gap-2 p-1 ">
          <button
            onClick={Increase}
            className="w-[20px] h-[20px] border-3 border-black"
          >
            +1
          </button>
          <button
            onClick={Decrease}
            className="w-[20px] h-[20px] border-3 border-black"
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
