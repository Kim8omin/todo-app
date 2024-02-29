import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slice/slice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
