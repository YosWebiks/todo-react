import React, { useState } from "react";
import Todo from "../models/todoModel";

interface Props {
  setTodos: (x:(todos: Todo[])=>Todo[])=>void;
}

export default function Add({ setTodos }: Props) {
  const [title, setTitle] = useState("");
  
  const addTodo = () => {
    const todo = new Todo(title)
    setTodos(todos=>[...todos, todo])
    setTitle("")
  }

  return (
    <div className="add card">
      <input
        type="text"
        placeholder="Your title here please"
        onChange={e=>setTitle(e.target.value)}
        value={title}
      />
      <button onClick={addTodo}>add</button>
    </div>
  );
}
