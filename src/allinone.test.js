import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import ToDo from './components/ToDo';

describe('Тестирование TODO', () => {
  const user = userEvent.setup();

  it('Невозможность добавить новой TODO, если не ввели ей имя', async () => {
    render(<ToDo />);
    const addButton = screen.getByRole('button', {name: /Add/i});
    await user.click(addButton);

    const nowTodos = screen.queryAllByRole('button', {name: /Remove/i});
    expect(nowTodos).toHaveLength(0);
  });

  it('Удаление новой TODO', async () => {
    render(<ToDo />);
    
    await AddToDo(user);

    const nowTodos = screen.queryByRole('button', {name: 'Remove'});
    await user.click(nowTodos);

    expect(nowTodos).not.toBeInTheDocument();
  });

  it('Добавление новой TODO', async () => {
    render(<ToDo />);

    await AddToDo(user);

    const nowTodos = screen.queryAllByRole('button', {name: /Remove/i});
    expect(nowTodos).toHaveLength(1);
  });
  

});

const AddToDo = async (user) => {
  const addButton = screen.getByRole('button', {name: /Add/i});

  const inputAddToDo = screen.queryByTestId('paste-input');
  await user.click(inputAddToDo);
  await user.paste('New TODO');

  await user.click(addButton);
}