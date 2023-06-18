// Have two reducers: counterReducer and todoReducer
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/CounterSlice';
import todoReducer from './features/TodoSlice';

// Combined both under configureStore
export const store = configureStore({
    reducer: {
      counter: counterReducer,
      todos: todoReducer,
    },
});