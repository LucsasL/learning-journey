// What is a Slice?

// A Slice is a piece of store state and the corresponding reducer logic to update that state. Slices are a way to organize our Redux store by breaking it down into smaller, more manageable parts.

// Slices Analogy

// Imagine you have a big cake, and you want to cut it into smaller, more manageable pieces. Each smaller piece is like a "slice" of the cake. In the context redux toolkit a "slice" is like a smaller part of your application's overall state and the instructions on how to change or update that specific part.

// Create Slice
import { createSlice } from "@redux/toolkit";

export const counterSlice = createSlice({
  name: "Counter",

  // initialState
  
  // -> initialState as the name suggest is going to the "initial" data of our sign.
  initialState: { value: 0 },

  // Reducers

  // -> Reducers are like the instructions on what to do with each slice of the cake.

  // -> They define how the information in a particular slice can be changed or updated.
  reducers: {
    // Actions

    // -> Actions are like the requests or commands you give to change a specific slice of the cake.

    // -> For example, you might have an action called "Eat a Bite" that instruct how to make a bite from a slice.
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

// Basically it would be the same than making a destructuring of an React Hook, except you set the specific methods when you create a slice:

// const [state, setState] = useState({ value: 0 });

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducers;
