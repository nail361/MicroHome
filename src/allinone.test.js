import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import ToDo from './components/ToDo';
import * as fetchApi from './components/fetchApi';

// jest.mock('./components/ToDo', () => {
//   const originalModule = jest.requireActual('./components/ToDo');
//   console.log(originalModule);
//   return {
//     ...originalModule,
//     fetchFromServer: jest.fn(() => Promise.resolve()),
//   };
// });

fetchApi.fetchFromServer = jest.fn(() => Promise.resolve());


describe('Тестирование TODO', () => {
  const user = userEvent.setup();

  it('Невозможность добавить новой TODO, если не ввели ей имя', async () => {
    render(<ToDo />);

    await mokingFetch();

    const addButton = screen.getByRole('button', {name: /Add/i});
    await user.click(addButton);

    const nowTodos = screen.queryAllByRole('button', {name: /Remove/i});
    expect(nowTodos).toHaveLength(0);
  });

  it('Удаление новой TODO', async () => {
    render(<ToDo />);
    await mokingFetch();
    
    await AddToDo(user);

    const nowTodos = screen.queryByRole('button', {name: 'Remove'});
    await user.click(nowTodos);

    expect(nowTodos).not.toBeInTheDocument();
  });

  it('Добавление новой TODO', async () => {
    render(<ToDo />);
    await mokingFetch();

    await AddToDo(user);

    const nowTodos = screen.queryAllByRole('button', {name: /Remove/i});
    expect(nowTodos).toHaveLength(1);
  });
  

});

const mokingFetch = async () => {
  expect(screen.getByText('Loading...')).toBeInTheDocument(); // Проверяем, что показывается загрузка
  await waitFor(() => expect(fetchApi.fetchFromServer).toHaveBeenCalled());
  expect(screen.getByText('Todo App using MobX+React')).toBeInTheDocument(); // Проверяем, что загрузка завершилась и отображается содержимое
}

const AddToDo = async (user) => {
  const addButton = screen.getByRole('button', {name: /Add/i});

  const inputAddToDo = screen.queryByTestId('paste-input');
  await user.click(inputAddToDo);
  await user.paste('New TODO');

  await user.click(addButton);
}