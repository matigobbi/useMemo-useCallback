function Movies({movies}) {
  let hasResults = movies?.length > 0
  return (
    <ul className="movies">
      {hasResults ? (
        movies?.map((movie) => (
          <li key={movie.imdbID}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt="poster of movie" />
          </li>
        ))
      ) : (
        <> No se han encontrado resultados</>
      )}
    </ul>
  )
}

export default Movies
