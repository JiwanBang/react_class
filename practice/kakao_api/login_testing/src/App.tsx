import "./App.css";
import "./Components/Home";
import Login from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import LoginRouter from "./Components/LoginRouter";
import KakaoCallback from "./Components/KakaoCallback";
import Map from "./map_comp/Map";

const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/login" element={<KakaoCallback />}></Route>
      </Routes>
      <Map />
    </div>
  );
};

export default App;
