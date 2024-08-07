import express from "express";

const app = express();

// Query Strings ? &

// A Query String is the part of a url that is used to pass data from the client side to the server side of an application

// Ampersand come to add more queries to the URL, you can add inumerable ampersands to add more and more query strings to your URL

app.get("/product", (req, res) => {
  const { category, id } = req.query;

  res.send(`Product Category: ${category}\n& ID: ${id}`);
});

app.listen(8000, () => console.log("Listening server at port 8000"));
