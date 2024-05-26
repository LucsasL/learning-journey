const Nav = () => {
  return (
    <>
      <nav>
        <div className="icon">
          Logo
        </div>

        <div>
          <h2>
            Category
          </h2>

          <div>
            <input 
              type="radio" 
              name="shoes"
              value={"All"}
              checked
            />
            <label htmlFor="shoes">All</label>

            <input 
              type="radio" 
              name="shoes"
              value={"All"}
            />

            <input 
              type="radio" 
              name="shoes"
              value={"All"}
            />

            <input 
              type="radio" 
              name="shoes"
              value={"All"}
            />

            <input 
              type="radio" 
              name="shoes"
              value={"All"}
            />
          </div>
        </div>

        <div>
          <h2>
            Price
          </h2>

        </div>

        <div>
          <h2>
            Colors
          </h2>
        </div>
      </nav>
    </>
  )
}

export default Nav