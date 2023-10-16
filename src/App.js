import './App.css';
import { addTodo, removeTodo, doneTodo, undoneTodo } from './stores/todo';
import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import './stores/index';
import './index.css';
import { Toggle, handleClick } from './toggle';

function App() {
  const [input, setInput] = React.useState("");
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  return (
    <div className="App">
      <form className="App-form" onSubmit={handleAddTodo}>
        <input
          class='input'
          type="text"
          placeholder="Введите текст"
          onInput={(e) => { setTodo(e.target.value) }}
        />

        <button
          class='button green'
          type="submit"
          onClick={() => dispatch(addTodo())}
        >
          Добавить в список задач
        </button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={this.handleClick}
          >
            {todo}, {this.state.isToggleOn ? doneTodo : undoneTodo}
            <button
              class='button red'
              onClick={() => dispatch(removeTodo())}
              type='button'
            >
              Убрать
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
