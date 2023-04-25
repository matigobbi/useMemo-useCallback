import dataMovies from '../mocking/results.json'
import error from "../mocking/error.json"
import { useState } from 'react'

function useMovies({query, apiKey}) {
  const [responseMovies, setResponseMovies] = useState([])
  let results = responseMovies.Search
  const mappedMovies = results?.map((movie) => {
    return {
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }})

  const getMovies = () =>{
    if (query){
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
      .then(res => res.json())
      .then(json => {
        setResponseMovies(json)
        console.log(json)
      })
      .catch(err => console.log(err))
    }else{
      setResponseMovies(error)
    }
  }

  return { movies: mappedMovies, getMovies };
}

export default useMovies;