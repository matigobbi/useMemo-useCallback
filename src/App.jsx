import { useState, useEffect, useRef } from 'react'
import Movies from './components/movies'
import useMovies from './hooks/useMovies'

function App() {
  let apiKey = '6bedab68'
  const [sort, setSort] = useState(false)
  const [query, setQuery] = useState('')
  const { movies, getMovies, loading, error } = useMovies({ query, apiKey, sort })
  let isFirstInput = useRef(true)

  const handleClick = (e) => {
    e.preventDefault()
    getMovies()
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSort = () =>{
    setSort(!sort)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <label> Search your movie</label>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Avengers, startwars, etc"
          />
          <>Sort by Title</>
          <input type="checkbox" onChange={handleSort} value={sort} />
          <button onClick={handleClick} type="submit">
            Submit
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
      {loading ? <img src={"https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif"} className='spinner'/> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
