import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [color, setColor] = useState("All");

  const changeHandler = (e, fieldset) => {
    switch (fieldset) {
      case "shoes":
        setCategory(e);
        return;

      case "price":
        setPrice(e);
        return;

      case "color":
        setColor(e);
        return;

      default:
        return;
    }

  }

  return (
    <>
      <nav>
        <div className="icon">
          <AiOutlineShoppingCart className="nav-icons" />
        </div>

        <div>
          <fieldset>
            <legend>Category</legend>
            <input
              type="radio"
              name="shoes"
              id="allCategory"
              onChange={(e) => changeHandler(e, "shoes")}
              checked
            />
            <label htmlFor="allCategory">All</label> <br />

            <input
              type="radio"
              name="shoes"
              id="sneakerCategory"
              onChange={(e) => changeHandler(e, "shoes")}
            />
            <label htmlFor="sneakerCategory">Sneaker</label> <br />

            <input
              type="radio"
              name="shoes"
              id="flatsCategory"
              onChange={(e) => changeHandler(e, "shoes")}
            />
            <label htmlFor="flatsCategory">Flats</label> <br />
            <input
              type="radio"
              name="shoes"
              id="sandalsCategory"
              onChange={(e) => changeHandler(e, "shoes")}
            />
            <label htmlFor="sandalsCategory">Sandals</label> <br />
            <input
              type="radio"
              name="shoes"
              id="heelsCategory"
              onChange={(e) => changeHandler(e, "shoes")}
            />
            <label htmlFor="heelsCategory">Heels </label> <br />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="radio"
              name="price"
              id="allPrices"
              onChange={(e) => changeHandler(e, "price")}
              checked
            />
            <label htmlFor="allPrices">All</label> <br />

            <input 
              type="radio" 
              name="price"
              id="lowPrices"
              onChange={(e) => changeHandler(e, "price")}
            />
            <label htmlFor="lowPrices">$0 - $50</label> <br />

            <input 
              type="radio" 
              name="price"
              id="averagePrices"
              onChange={(e) => changeHandler(e, "price")}
            />
            <label htmlFor="averagePrices">$50 - $100</label> <br />

            <input 
              type="radio" 
              name="price"
              id="highPrices"
              onChange={(e) => changeHandler(e, "price")}
            />
            <label htmlFor="highPrice">$100 - $150</label> <br />

            <input 
              type="radio" 
              name="price"
              id="higherPrice"
              onChange={(e) => changeHandler(e, "price")}
            />
            <label htmlFor="higherPrices">Over $150</label> <br />
          </fieldset>

          <fieldset>
            <legend>Colors</legend>

            <input 
              type="radio" 
              name="color"
              id="allColors"
              onChange={(e) => changeHandler(e, "color")}
              checked 
            />
            <label htmlFor="idColors">All</label> <br />

            <input 
              type="radio" 
              name="color"
              id="blackColor"
              onChange={(e) => changeHandler(e, "color")}
            />
            <label htmlFor="blackColor">Black</label> <br />

            <input 
              type="radio" 
              name="color"
              id="blueColor"
              onChange={(e) => changeHandler(e, "color")}
            />
            <label htmlFor="blueColor">Blue</label> <br />

            <input 
              type="radio" 
              name="color"
              id="redColor"
              onChange={(e) => changeHandler(e, "color")}
            />
            <label htmlFor="redColor">Red</label> <br />

            <input 
              type="radio" 
              name="color"
              id="greenColor"
              onChange={(e) => changeHandler(e, "color")}
            />
            <label htmlFor="greenColor">Green</label> <br />

            <input 
              type="radio" 
              name="color"
              id="whiteColor"
              onChange={(e) => changeHandler(e, "color")}
            />
            <label htmlFor="whiteColor">White</label> <br />
          </fieldset>
        </div>
      </nav>
    </>
  );
};

export default Nav;
