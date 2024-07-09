import express from "express";

const app = express();

// Route Params
// ecom/products/iphone/:<data>

app.get("/product/order/:day/:month/:year", (req, res) => {
  const { day, month, year } = req.params;
  res.send(`Product was ordered on: ${month} / ${day} / ${year}`);
})

app.listen(8000, () => console.log("Listening server on port 8000"));