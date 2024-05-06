import { useState } from "react";

const Movie = () => {
  const [ movie, setMovie ] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5
    // }

    setMovie({ ...movie, ratings: 5 });
  }

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Ratings: {movie.ratings}</p>

      <button onClick={handleClick}>Update Ratings</button>
    </>
  );
}

const App = () => {
  return (
    <>
      <Movie />
    </>
  )
}

export default App;