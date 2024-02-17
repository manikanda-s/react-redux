import { configureStore } from "@reduxjs/toolkit";
import counderReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counderReducer,
  },
});
