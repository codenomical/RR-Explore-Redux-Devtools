// Using createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Intitial state of items is an empty array. 'addTodo' reducer adds to the 'items' array using 'push.' 'removeOne' reducer removes from the 'items' arary using 'splice.' 'clearTodo' reducer clears 'items' array and assigns an empty array.
const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeOne: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearTodo: (state) => {
      state.items = [];
    },
  },
});

export const { addTodo, removeOne, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;