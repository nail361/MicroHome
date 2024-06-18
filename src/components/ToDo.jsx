import React from 'react';
import CreateToDo from './CreateToDo';
import ToDoItems from './ToDoItems';

const ToDo = () => {
  return (
    <div>      
      <h1>Todo App using MobX+React</h1>
      <CreateToDo />
      <ToDoItems />
    </div>
  );
};

export default ToDo;
