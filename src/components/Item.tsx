import React from "react";
import Todo from "../models/todoModel";

interface Props {
  todo: Todo;
  setTodos: (x: (todos: Todo[]) => Todo[]) => void;
}
export default function Item({ todo, setTodos }: Props) {

  const handleCompletedChage = (checked:boolean) => {
    setTodos(todos => {
      const copy = [...todos]
      const td = copy.find(currTodo => currTodo.id === todo.id)
      td!.completed = checked
      return copy
    })
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={e=>handleCompletedChage(e.target.checked)}
      />
      <p>{todo.title}</p>
      <p>{todo.created_at.toLocaleString()}</p>
      <button>Delete</button>
    </div>
  );
}
