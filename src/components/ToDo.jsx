import React, {  useEffect, useState } from 'react';
import CreateToDo from './CreateToDo';
import ToDoItems from './ToDoItems';

import { fetchFromServer } from './fetchApi';

// export const fetchFromServer = async () => {
//   return new Promise((response, reject) => {
//     setTimeout(response, 5000);
//   });
// }

const ToDo = () => {
  const [loading, setLoading] = useState(true);

  // get todos
  useEffect(() => {
    fetchFromServer().then( () => {
      setLoading(false);
    });
  }, [])
  
  if (loading) return <div>Loading...</div>

  return (
    <div>      
      <h1>Todo App using MobX+React</h1>
      <CreateToDo />
      <ToDoItems />
    </div>
  );
};

export default ToDo;
