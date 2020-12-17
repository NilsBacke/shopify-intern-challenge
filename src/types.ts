export interface Movie {
  title: string
  year: string
}

export function getMovieString(movie: Movie) {
  return movie.title + '(' + movie.year + ')'
}
