import React, { useState, useEffect } from "react";
import Greeting from "./components/Greeting";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);
  const todoItems = ["Buy milk", "Clean the kitchen", "Make dinner"];

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="App">
      <Greeting name="React Developer" />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <TodoList items={todoItems} />
    </div>
  );
}

export default App;
