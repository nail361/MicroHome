import React from 'react';
import { useStore } from '../store/mainStore';
import { observer } from 'mobx-react-lite';

const ToDoItem = observer(({ todo }) => {
  const store = useStore();

  const onChangeCheckbox = (todo) => {
    toggleItem(todo)        
    sendToDoCheckedStatus();
  }

  const toggleItem = (todo) => {
    todo.toggleCompleted();
  }

  const sendToDoCheckedStatus = () => {
    const hasUnchecked = store.todos.some((todo) => !todo.completed);
    const addToCartEvent = new CustomEvent('ALL_CHECKED', {
      detail: {allChecked: !hasUnchecked}
    });
    window.dispatchEvent(addToCartEvent);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onChangeCheckbox(todo)}
      />
      <span>{todo.title}</span>
      <button name='Remove' onClick={() => store.removeTodo(todo.id)}>Remove</button>
    </li>
  );
});

export default ToDoItem;