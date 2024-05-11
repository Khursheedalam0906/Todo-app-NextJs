"use client";

import { TodoObject } from "@/models/Todo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const addTodo = () => {
    setTodos([{ id: uuidv4(), value: todo, done: false }, ...todos]);
    setTodo("");
  };

  const markTodoDone = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <header className="bg-slate-950 p-4 text-white">
        <h1 className="text-3xl">Todo</h1>
      </header>
      <main className="p-4">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter a new todo"
          className="p-2 rounded mr-5 text-slate-900"
        />
        <button className="border-2 p-2 rounded" onClick={() => addTodo()}>
          Add Todo
        </button>
        <ul className="mt-5">
          {todos.map((todo) => (
            <li
              onClick={() => markTodoDone(todo.id)}
              className={`text-2xl ml-5 cursor-pointer ${
                todo.done ? "line-through" : "no-underline"
              }`}
            >
              {todo.value}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
export default Home;
