import { configureStore } from "@reduxjs/toolkit";
// Adding the Slice to the Store
import counterSlice from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});