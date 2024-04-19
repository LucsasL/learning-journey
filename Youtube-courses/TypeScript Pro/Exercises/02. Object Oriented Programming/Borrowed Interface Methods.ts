interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie1: MovieGenre = {
  name: "",
  ratings: 1,
  genre: "",
  }
};