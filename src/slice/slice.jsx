import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addSlice = createSlice({
  name: "addTask",
  initialState: {
    todos: [],
  },
  reducers: {
    add(state, action) {
      const newTodo = action.payload;
      state.todos.push({
        id: uuidv4(),
        title: newTodo.title,
        date: newTodo.date,
        file: newTodo.file,
        category: newTodo.category,
        todo: newTodo.todo,
      });
    },
  },
});

export const addActions = addSlice.actions;
export default addSlice;
