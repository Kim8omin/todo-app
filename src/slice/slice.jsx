import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const counterSlice = createSlice({
  name: "addTask",
  initialState: [],

  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { add } = counterSlice.actions;
export default counterSlice.reducer;
