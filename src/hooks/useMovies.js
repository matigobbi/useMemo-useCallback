import { useState } from 'react'
import { searchMovies } from '../services/movies'
function useMovies({ query, apiKey }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getMovies = () => {
    setLoading(true)
    setError(null)
    searchMovies({ query, apiKey })
      .then((movies) => setMovies(movies))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }

  return { movies, getMovies,loading,error }
}

export default useMovies
