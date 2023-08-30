import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload.text });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    clearTodos: () => [],
  },
});

export const { addTodo, removeTodo, clearTodos } = todoSlice.actions;

export default todoSlice.reducer;
