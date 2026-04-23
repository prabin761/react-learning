import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div>
      <h1>Todo list</h1>

      <form onSubmit={addTodo}>
        <input
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Todo"
        />

        <button type="submit">add</button>
      </form>

      <ul>
        {todos.map((todo,index) =>(
            <li key={index}> {todo} </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
