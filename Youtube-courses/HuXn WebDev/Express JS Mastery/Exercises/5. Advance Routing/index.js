import express from "express";

const app = express();

// String Pattern Path
// app.get("/ab?cd", (req, res) => {
//   res.send("If the user hit (acd) or (abcd) then this will run.");
// });

// Regex (Regular expression)

// It recognizes if the path has an specified string, if it match it will send the request regularly
app.get("/x/", (req, res) => {
  res.send("If the path includes the letter \"x\", it will work.");
});

// Strict Regex (Strict Regular expression)

// It receives a strict string, where you can say its limitations and features, if it pass it will not return the page

// users/1234
app.get("\^/users\/[0-9]{4}$", (req, res) => {
  res.send("It's working."); 
});

app.get("/products/product/product-details", (req, res) => {
  res.send("This code will only run if you provide \"/products/iphone\" in the site's route.");
});

app.listen(8000, () => console.log("Listen server on port 8000"));