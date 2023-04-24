import { useState , useEffect , useRef} from 'react'
import Movies from './components/movies'
import useMovies from './hooks/useMovies'

function App() {
  let apiKey = '6bedab68'
  const { movies } = useMovies()
  const [query, setQuery] = useState("")
  const [error, setError] = useState(null)
  let isFirstInput = useRef(true)
  console.log(isFirstInput)
  
  const handleClick=(e)=>{
     e.preventDefault()
     console.log({query});
  }

  const handleInputChange = (e) =>{
    setQuery(e.target.value)


  }

  useEffect(()=>{
    if(isFirstInput.current){
      isFirstInput.current = query === ""
      return
    }

    if(query === ""){
      setError("POR FAVOR INTRODUZCA UNA BUSQUEDA")
      return
    }
    if(query.lenght < 3){
      setError("POR FAVOR INTRODUZCA MAS DE 3 CARACTERES")
      return
    }
    setError(null)
  },[query])
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
          <button onClick={handleClick} type="submit">Submit</button>
          
        </form>
          {error && <p style={{color:"red"}}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
