import React from 'react';
import { useStore } from "../store/mainStore";
import { observer } from "mobx-react-lite";
import ToDoItem from "./TodoItem";

const ToDoItems = observer(({ todo }) => {
  const store = useStore();

  return (
    <div>
      <ul>
        {store.todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
});

export default ToDoItems;