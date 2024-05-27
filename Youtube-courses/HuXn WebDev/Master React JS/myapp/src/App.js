import { useState } from "react";
import Nav from "./components/ShopProject/Nav";
import Main from "./components/ShopProject/Main";
import Footer from "./components/ShopProject/Footer";
import "./styles/style.css";

import products from "./db/data";

const App = () => {
  const [category, setCategory] = useState("All");

  const [query, setQuery] = useState("");

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  // Input Filter
  const filteredItems = products.filter(
    (p) => p.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filter
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  // Button Filter
  const handleClick = (e) => {
    if (e.target.value === "All Products") {
      return;
    }
    
    setCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts;
  }

  filteredData(products, category, query);

  return (
    <>
      <div className="pageCont">
        <Nav handleChange={handleChange()} />
        <Main handleClick={handleClick()} changeQuery={changeQuery()} />
      </div>
      <Footer />
    </>
  );
};

export default App;
