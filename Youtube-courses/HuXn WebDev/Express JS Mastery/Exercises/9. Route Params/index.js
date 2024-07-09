import express from "express";

const app = express();

// Route Params
// ecom/products/iphone/:<data>

app.get("/product/order/:day/:month/:year", (req, res) => {
  const { day, month, year } = req.params;
  res.send(`Product was ordered on: ${month} / ${day} / ${year}`);
})

// app.param() Method
app.param("id", (req, res, next, id) => {
  console.log(`ID: ${id}.`);
  next();
});

app.get("/user/:id", (req, res) => {
  console.log(`This is user ID Path`);
  res.send("Responsee Ok");
});

app.listen(8000, () => console.log("Listening server on port 8000"));