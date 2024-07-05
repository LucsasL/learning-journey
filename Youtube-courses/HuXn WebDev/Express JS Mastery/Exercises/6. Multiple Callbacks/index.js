import express from "express";

const app = express();

// Multiple Callbacks

// Provide the next() function as a paramter in the first callback function if you need to use more than one callback during the request

// If you need more than two callbacks, continue to use the next() function until you finish your demands
app.get(
  "/double-cb",
  (req, res, next) => {
    console.log("Single Callback");
    next();
  },
  (req, res) => {
    res.send("Second Callback");
    console.log("Second Callback");
  }
);

// Arrays of callback

// You can also provide an array of callbacks to be executed in the get method

const cb1 = (req, res, next) => {
  console.log("First callback");
  next();
}

const cb2 = (req, res, next) => {
  console.log("Second callback");
  next();
}

const cb3 = (req, res) => {
  console.log("Third callback");
  res.send("Arrays of Callbacks");
}

const cbArray = [cb1, cb2, cb3];

app.get("/array-cb", cbArray);

app.listen(8000, () => console.log("Listening server on port 8000"));
