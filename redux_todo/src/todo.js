import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { id } from './utils.js'

const store = configureStore({ reducer: { todos } })

const initialState = { count: 0, todos: [] }

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add_todo: (state, action) => {
            count = state.count + 1;
            todos = [{ text: action.payload.text, id: id(), done: false }, ...state.todos]
        },
        remove_todo: (state, action) => {
            count = state.count - 1;
            todos = state.todos.filter((todo) => todo.id !== action.payload.text)
        },
        done_todo: (state, action) => {
            todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, done: true }
                }
                return todo
            })
        },
        undone_todo: (state, action) => {
            todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, done: false }
                }
                return todo
            })
        }
    }
});

export const { add_todo, remove_todo, done_todo, undone_todo } = todoSlice
