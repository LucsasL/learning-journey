import { useEffect, useState } from "react";
import "../styles/style.css";
import axios from "axios";

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(r => {
      console.log(r);
      setItems(r.data.meals);
    })
    .catch(err => console.log(err));
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, id }) => {
    return (
      <section className="card" key={id}>
        <h1>{strMeal}</h1>
        <img src={strMealThumb} alt={strMeal} />

        <div className="content">
          <p>{strMeal}</p>

          <p>#{id}</p>
        </div>
      </section>
    );
  });

  return (
    <div className="itemsCont">
      {itemsList}
    </div>
  );
}

export default Main;