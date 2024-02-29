import { configureStore } from "@reduxjs/toolkit";
import addSlice from "../slice/slice";

const store = configureStore({ reducer: { addTask: addSlice.reducer } });

export default store;
