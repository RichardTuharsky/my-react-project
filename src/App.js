import React, { useState, useEffect } from "react";
import Greeting from "./components/Greeting";
import TodoList from "./components/TodoList";
import UserForm from "./components/UserForm";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const todoItems = ["Buy milk", "Clean the kitchen", "Make dinner"];

  const handleUserSubmit = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      <Greeting name="React Developer" />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h2>Todo List:</h2>
      <TodoList items={todoItems} />
      <h2>User Form:</h2>
      <UserForm onSubmit={handleUserSubmit} />
      {user && (
        <div>
          <h3>Submit User Data:</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
