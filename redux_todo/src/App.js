import './App.css';
import { addTodo, removeTodo, doneTodo, undoneTodo } from './stores/todo';
import React from 'react';

function App() {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Введите текст"
        onChange={(e) => { setTodo(e.target.value) }}
      />

      <button
        type="button"
        onClick={addTodo}
      >
        Добавить в список задач
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li
            onClick={doneTodo}
            onDoubleClick={undoneTodo}
            key={index}
          >
            {todo}
            <button onClick={removeTodo}>
              Убрать
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
