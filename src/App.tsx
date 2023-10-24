import type { RootState } from './stores'
import type { Todo } from './stores/types'

import './App.css';
import { addTodo, removeTodo, doneTodo, undoneTodo } from './stores/todo';
import React, { FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './stores/index';
import './index.css';

function App() {
  const [todoInput, setTodoInput] = React.useState('');

  const todos = useSelector<RootState, Todo[]>(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({ text: todoInput }));
    setTodoInput('');
  };

  const handleRemoveTodo = (e: FormEvent, id: string) => {
    e.preventDefault();
    dispatch(removeTodo({ id }))
  };

  const handleToggle = (id: string) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      todo.done ? dispatch(undoneTodo({ id })) : dispatch(doneTodo({ id }));
    }
  }

  return (
    <div className="App">
      <form className="App-form" onSubmit={handleAddTodo}>
        <input
          className='input'
          value={todoInput}
          type="text"
          placeholder="Введите текст"
          onInput={(e) => { setTodoInput((e.target as HTMLInputElement).value) }}
        />
        <button className='button green'>
          Добавить в список задач
        </button>
      </form>

      <ul className='ul'>
        {todos.map(({ text, id, done }) => (
          <li
            className={`${done ? 'done' : ''}`}
            key={id}
          >
            <form className='form' onSubmit={(e) => handleRemoveTodo(e, id)}>
              <span onClick={() => handleToggle(id)}>{text}</span>
              <button className='button __remove red'>
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
