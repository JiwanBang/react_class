import { Suspense } from "react";
import Todo from "./component/Todo";

function App() {
  return (
    <Suspense fallback={<h1>NOW LOARDING</h1>}>
      <Todo />
    </Suspense>
  );
}

export default App;
