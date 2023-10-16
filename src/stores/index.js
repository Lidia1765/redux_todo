import { configureStore } from '@reduxjs/toolkit';
import { addTodo, doneTodo, removeTodo, todoSliceReducer, undoneTodo } from './todo'

export const store = configureStore({
  reducer: {
    todos: todoSliceReducer
  }
})
export function todoDispach() {
  [addTodo, removeTodo, doneTodo, undoneTodo].forEach(actionCreator => {
    store.dispatch(actionCreator());
  });
}