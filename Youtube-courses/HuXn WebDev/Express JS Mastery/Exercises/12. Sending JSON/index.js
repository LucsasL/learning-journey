import express from "express";
import products from "./products.js";

const app = express();

// Sending JSON
app.get("/products", (req, res) => {
  res.json(products);
})


app.listen(8000, () => console.log("Listening server at port 8000"));