import React from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from '../store/mainStore';
import { observer } from 'mobx-react-lite';

const CreateToDo = observer(() => {
  const store = useStore();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    store.addTodo(data.titleRequired.trim());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.titleRequired && <span>This field is required</span>}
      <input
        data-testid='paste-input'
        type="text"
        placeholder="Add todo"
        {...register("titleRequired", { required: true })}
      />
      <button name='Add' type="submit">Add</button>
    </form>
  );
});

export default CreateToDo;
