export const searchMovies = async ({query ,apiKey}) => {
  if(query === "") return null

  try{
    if (query){
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
      const json = await response.json()
      return json?.Search?.map((movie) => {
        return {
        id: movie.imdbD,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      }})
    } 
  }catch (e){
   
    throw new Error("error searching movies")
  }
}