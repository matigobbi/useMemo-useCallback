import { useState } from 'react'
import { useRef } from 'react'
import Movies from './components/movies'
import useMovies from './hooks/useMovies'

function App() {
  let apiKey = '6bedab68'
  const { movies } = useMovies()
  const inputRef = useRef()

  const handleClick=()=>{
    
  }
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <label> Search your movie</label>
          <input
            ref={inputref}
            type="text"
            placeholder="Avengers, startwars, etc"
          />
          <button onClick={handleClick} type="submit"></button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
