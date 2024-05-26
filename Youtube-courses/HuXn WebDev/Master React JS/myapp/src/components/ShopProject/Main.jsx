const Main = () => {
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.com");
    const data = res.json();
  }

  // fetchData();

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
            <div className="prodCont">
              <div className="prodImg">
                <picture>
                  <img src="" alt="Shoe Product" />
                </picture>
              </div>

              <div className="prodInfo">
                <h3>
                  Placeholder
                </h3>

                <p>
                  (NaN reviews)
                </p>

                <p>
                  $null
                </p>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default Main