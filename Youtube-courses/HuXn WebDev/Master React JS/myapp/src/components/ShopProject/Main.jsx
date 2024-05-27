import Header from "../ShopProject/Header";
import { BsFillBagHeartFill } from "react-icons/bs";
import data from "../../db/data";

const Main = ({ handleClick, changeQuery }) => {

  return (
    <>
      <div className="mainCont">
        <Header changeQuery={changeQuery()} />
        <main>
          <section className="products">
            <h2>Recommended</h2>
            <div className="brands">
              <button className="brandsBtn" onClick={(e) => handleClick(e)}>
                All Products
              </button>
              <button className="brandsBtn" onClick={(e) => handleClick(e)}>
                Nike
              </button>
              <button className="brandsBtn" onClick={(e) => handleClick(e)}>
                Adidas
              </button>
              <button className="brandsBtn" onClick={(e) => handleClick(e)}>
                Puma
              </button>
              <button className="brandsBtn" onClick={(e) => handleClick(e)}>
                Vans
              </button>
            </div>
            <div className="grid">
              {data.map(
                ({ img, title, star, reviews, prevPrice, newPrice }) => {
                  return (
                    <div
                      className="prodCont"
                      key={Math.floor(Math.random() * 100)}
                    >
                      <div className="prodImg">
                        <picture>
                          <img src={img} alt={title} />
                        </picture>
                      </div>
                      <div className="prodInfo">
                        <h3>{title}</h3>
                        <p>
                          <span className="starReview">
                            {star}
                            {star}
                            {star}
                            {star}
                            {star}
                          </span>{" "}
                          {reviews}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                          }}
                        >
                          <p>
                            <span>
                              <del>{prevPrice}</del>
                            </span>{" "}
                            <br />
                            <span className="currentPrice">${newPrice}</span>
                            <span className="currentPrice cents">.00</span>
                          </p>
                          <BsFillBagHeartFill />
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Main;
