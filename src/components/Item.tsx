import React from "react";
import Todo from "../models/todoModel";
import moment from "moment";

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

  const handleDelete = () => {
    setTodos(todos =>  todos.filter(currTodo => currTodo.id !== todo.id))
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={e=>handleCompletedChage(e.target.checked)}
      />
      <p style={{textDecoration: todo.completed? "line-through":"none"}}>{todo.title}</p>
      <p>{moment(todo.created_at).fromNow()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
