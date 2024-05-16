import { createSlice } from "@reduxjs/toolkit";

// You can also use the ES6 convention of "Enhanced Object Literals" to declare the initialState or other properties by using variables declared and assigned beforehand.

// let initialState = { value: 0 };

// counterSlice = createSlice({ name, initialState, reducers... });

export const counterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducers;
