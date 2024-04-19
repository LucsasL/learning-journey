interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie1: MovieGenre = {
  name: "Star Wars",
  genre: "Action",
  ratings: 8.9,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
  },
};

console.log(movie1.printMovieInfo("Star Wars", 30, 8.9));