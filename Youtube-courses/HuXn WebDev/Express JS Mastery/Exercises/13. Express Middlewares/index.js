import express from "express";
import userCredentials from "./middlewares/logs.js";

const app = express();

// Express Middlewares

// A Middleware is a JavaScript function which takes 3 parameters and occur in the middle of the process of request.

// It takes 3 parameters:
// 1. Request;
// 2. Response; and
// 3. Next.

// function (req, res, next) { <Code> }

// - Request 🙏

// - Middleware 🕑

// - Response 🏳️

// The middlewares have access of the request and response object of the HTTP request, It can perform operation on the incoming request and can modify our response object or even pass control to the next middleware function

app.use(userCredentials);

app.get("/", userCredentials, (req, res) => {
  res.send("<h1>Hello admin</h1>");
});

app.get("/about", userCredentials, (req, res) => {
  res.send("<h1>About Section</h1>");
});

app.get("/contact", userCredentials, (req, res) => {
  res.send("<h1>Contact Section</h1>");
});

app.listen(8000, () => console.log("Listening server at port 8000"));
