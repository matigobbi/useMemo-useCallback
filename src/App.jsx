import { useState } from 'react'
import dataMovies from "./mocking/results.json"

function App() {
  let apiKey= "6bedab68"
  let results= dataMovies.Search
  let hasResults = results?.length > 0
  return (
    <div className='page'>
    <header>
      <h1>Buscador de peliculas</h1>
      <form className='form'>
        <label> Search your movie</label>
        <input type="text" placeholder='Avengers, startwars, etc' />
        <button type='submit'></button>
      </form>
    </header>
    <main>
    <ul>

      {results?.map((movie)=> (
        <>
          <p>{movie.Title}</p>
          <>{movie.Year}</>
        </>
      ))}
      </ul>
    </main>
    </div>
  )
}

export default App
