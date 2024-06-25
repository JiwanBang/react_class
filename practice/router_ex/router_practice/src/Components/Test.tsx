import { FC } from "react";
import { Route, Routes, useParams } from "react-router-dom";

const Test: FC = () => {
  const params = useParams();
  return (
    <div>
      테스팅.......
      <Routes>
        <Route path="/" element={<div>루트패스</div>} />
        <Route
          path="/tt"
          element={<div>path : 이런 내맘 모르고 너무 해 너무 해</div>}
        />
      </Routes>
    </div>
  );
};

export default Test;
