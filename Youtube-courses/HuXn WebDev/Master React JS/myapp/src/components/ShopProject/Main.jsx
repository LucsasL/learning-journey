import data from "../../db/data";

const Main = () => {

  return (
    <>
      <section className="products">
        <h2>
          Recommended
        </h2>

        <div className="brands">
          <button className="brandsBtn">
            All Products
          </button>

          <button className="brandsBtn">
            Nike
          </button>

          <button className="brandsBtn">
            Adidas
          </button>

          <button className="brandsBtn">
            Puma
          </button>

          <button className="brandsBtn">
            Vans
          </button>
        </div>

        <div className="grid">
          {
            data.map(({ img, title, star, reviews, prevPrice, newPrice }) => {
              return (
                <div className="prodCont">
                  <div className="prodImg">
                    <picture>
                      <img src={img} alt={title} />
                    </picture>
                  </div>

                  <div className="prodInfo">
                    <h3>
                      {title}
                    </h3>

                    <p>
                      {star} {reviews}
                    </p>

                    <p>
                      <span>{prevPrice}</span> <br />
                      <span>{newPrice}</span>
                    </p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    </>
  )
}

export default Main