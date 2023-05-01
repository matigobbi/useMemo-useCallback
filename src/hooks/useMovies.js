import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'
function useMovies({ query, apiKey, sort }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const previusQuery = useRef(query)

  const getMovies = useCallback(() => {
    if (previusQuery.current === query) return
    previusQuery.current = query
    setLoading(true)
    setError(null)
    searchMovies({ query, apiKey })
      .then((movies) => setMovies(movies))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  })

  const sortedMovies = useMemo(() => {
    if(!movies) return
    return sort 
    ? [...movies].sort((a,b )=> a.title.localeCompare(b.title)) 
    : movies
  }, [sort, movies])
  return { movies: sortedMovies, getMovies, loading, error }
}

export default useMovies
