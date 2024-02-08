"use client";
import { useState } from "react";

export default function Page() {
  const [todos, setTodos] = useState<any>([]);

  const [input, setInput] = useState("");

  const handleInput = (event: any) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (input) {
      setTodos((prevTodos: any) => [...prevTodos, { id: Date.now(), text: input }]);
    }
  };

  const handleDelete = (id: any) => {
    setTodos((prevTodos: any) => prevTodos.filter((todo: any) => todo.id !== id));
  };

  return (
    <div>
      <h1>ToDo page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo: any) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
