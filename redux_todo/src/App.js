import logo from './logo.svg';
import './App.css';
import { add_todo, remove_todo, done_todo, undone_todo } from './todo.js'
import React from 'react';

function App() {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  return (
    <div className="App">
      <input onChange={(e) => { setTodo(e.target.value) }}>Введите текст</input>
      <button onClick={add_todo}>Добавить в список задач</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            onClick={done_todo}
            onDoubleClick={undone_todo}
            key={index}>
            {todo}
          </li>,

          <button onClick={remove_todo}>Убрать</button>
        ))}
      </ul>
    </div>
  );
}

export default App;
