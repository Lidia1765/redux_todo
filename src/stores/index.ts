import { configureStore } from '@reduxjs/toolkit';
import { todoSliceReducer } from './todo'

export const store = configureStore({
  reducer: {
    todos: todoSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
