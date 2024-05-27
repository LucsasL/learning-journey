import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = ({ handleChange }) => {
  console.log(handleChange);

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
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="allCategory">All</label> <br />

            <input
              type="radio"
              name="shoes"
              id="sneakerCategory"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="sneakerCategory">Sneaker</label> <br />

            <input
              type="radio"
              name="shoes"
              id="flatsCategory"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="flatsCategory">Flats</label> <br />
            <input
              type="radio"
              name="shoes"
              id="sandalsCategory"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="sandalsCategory">Sandals</label> <br />
            <input
              type="radio"
              name="shoes"
              id="heelsCategory"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="heelsCategory">Heels </label> <br />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="radio"
              name="price"
              id="allPrices"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="allPrices">All</label> <br />

            <input 
              type="radio" 
              name="price"
              id="lowPrices"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="lowPrices">$0 - $50</label> <br />

            <input 
              type="radio" 
              name="price"
              id="averagePrices"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="averagePrices">$50 - $100</label> <br />

            <input 
              type="radio" 
              name="price"
              id="highPrices"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="highPrice">$100 - $150</label> <br />

            <input 
              type="radio" 
              name="price"
              id="higherPrice"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="higherPrices">Over $150</label> <br />
          </fieldset>

          <fieldset>
            <legend>Colors</legend>

            <input 
              type="radio" 
              name="color"
              id="allColors"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="idColors">All</label> <br />

            <input 
              type="radio" 
              name="color"
              id="blackColor"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="blackColor">Black</label> <br />

            <input 
              type="radio" 
              name="color"
              id="blueColor"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="blueColor">Blue</label> <br />

            <input 
              type="radio" 
              name="color"
              id="redColor"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="redColor">Red</label> <br />

            <input 
              type="radio" 
              name="color"
              id="greenColor"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="greenColor">Green</label> <br />

            <input 
              type="radio" 
              name="color"
              id="whiteColor"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="whiteColor">White</label> <br />
          </fieldset>
        </div>
      </nav>
    </>
  );
};

export default Nav;
