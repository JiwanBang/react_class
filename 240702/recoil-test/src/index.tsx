import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// Recoil = Context를 쉽게 사용할 수 있게 해주는 라이브러리다.
// 같은 종류로는 Redux, MobX 등이 있음
// Recoil도 요즘은 지양하는 편이다 => 전역 상태 자체를 지양함(무거움)
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter>
      {/* store 세팅 */}
      <App />
    </BrowserRouter>
  </RecoilRoot>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
