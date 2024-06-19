# React without typescript

```bash
create-react-app todo-list-js
cd todo-list-js
npm i tailwindcss
npx tailwindcss init
```

```bash

tailwind.config.js 에서
content[] =>
"./src/**/*.{js,jsx}"

index.css => 전부 주석처리하고
@tailwind base;
@tailwind components
@tailwind utilities
```

```bash
index.js에서
<React.StrictMode>
</React.StrictMode>
주석처리
```

```js
// App.js 내용 지우고
import React from "react";
class App extends React.Component {
  constructor(props) {
    this.state = { list: [] };
  }
  render() {
    return <div></div>;
  }
}
export default App;
```

npm start
