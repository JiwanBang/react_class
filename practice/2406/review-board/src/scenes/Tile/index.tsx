import { FC, useCallback, useEffect, useState } from "react";
import Comp from "./Comp";

export interface IPos {
  x: number;
  y: number;
}

export const usePosition = (position?: IPos) => {
  const [_x, setX] = useState<number>(position?.x || 0);
  const [_y, setY] = useState<number>(position?.y || 0);
  const pos = { x: _x, y: _y };

  const setPosition = useCallback((x: number = 0, y: number = 0) => {
    setX(x);
    setY(y);
  }, []);

  //   const pos = { x: _x, y: _y };
  //   console.log("test");

  return { pos, setPosition };
};

export interface IColor {
  r: number;
  g: number;
  b: number;
}

// export const useColor = (color?: IColor) => {
//   const { _r, setR } = useState<number>(color?.r || 255);
//   const { _g, setG } = useState<number>(color?.g || 255);
//   const { _b, setB } = useState<number>(color?.b || 255);
//   const col = { r: _r, g: _g, b: _b };

//   const setColor = useCallback(
//     (r: number = 0, b: number = 0, g: number = 0) => {
//       setR(r);
//       setG(g);
//       setB(b);
//     },
//     []
//   );

//   return { color, setColor };
// };

const Tile: FC = () => {
  const { pos, setPosition } = usePosition();
  console.log(pos);
  useEffect(() => {
    setPosition(1, 3);
  }, []);

  return <Comp />;
};

export default Tile;
