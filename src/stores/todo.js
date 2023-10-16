import { createSlice } from "@reduxjs/toolkit";
import { id } from '../utils.js'

const initialState = { count: 0, todos: [] }

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.count = state.count + 1;
            state.todos = [{ text: action.payload.text, id: id(), done: false }, ...state.todos]
        },
        removeTodo: (state, action) => {
            state.count = state.count - 1;
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.text)
        },
        doneTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, done: true }
                }
                return todo
            })
        },
        undoneTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, done: false }
                }
                return todo
            })
        }
    }
});

export const { addTodo, removeTodo, doneTodo, undoneTodo } = todoSlice.actions
export const todoSliceReducer = todoSlice.reducer
