import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todoTask",
  initialState: {
    todos: [],
  },
  reducers: {
    add(state, action) {
      const newTodo = action.payload;
      console.log(newTodo);
      state.todos.unshift({
        id: uuidv4(),
        title: newTodo.title,
        date: newTodo.date,
        file: newTodo.file,
        category: newTodo.category,
        todo: newTodo.todo,
        done: false,
      });
    },
    delete(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    status(state, action) {
      console.log("클릭", state, action.payload);
      console.log("state's todos", state.todos);
      state.todos = state.todos.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
      console.log("그이후의 state", state.todos);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
