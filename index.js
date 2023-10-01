import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import React from 'react'
import rootReducer from './reducers'

const store = configureStore({ reducer: rootReducer })

const initialState = { count: 0, todos: [], text: '' }

function todos(state = initialState, action) {
    switch (action.type) {
        case 'add_todo':
            return { ...state, id: 1, count: state.count + 1, todos: [...state.todos, { text: payload.text }] }
        case 'remove_todo':
            return { ...state, count: state.count - 1, todos: state.todos.filter((todo) => todo.id !== payload.text) }
        case 'done_todo':
            return { ...state, value: state.count, onClick: 'close_todo' }
        default:
            return state, action
    }
}
