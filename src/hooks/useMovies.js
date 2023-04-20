import dataMovies from '../mocking/results.json'

function useMovies() {
  let results = dataMovies.Search
  const mappedMovies = results?.map((movie) => {
    return {
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }})
  return { movies: mappedMovies };
}

export default useMovies;