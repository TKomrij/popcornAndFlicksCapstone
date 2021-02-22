import React, { useContext, useEffect} from "react"
import { GenreContext } from "./FilterProvider"
import { MovieContext } from "../movies/MovieProvider"
import "./Filter.css"

export const Filter = () => {
  const { genres, getGenres, setGenres } = useContext(GenreContext)
  const { setMovies, getMovies } = useContext(MovieContext)
  

  
  const handleSelect=(e)=> {
    getMovies()
    .then((movieObj) => {

      // get movies that have the genre id selected
      if(e.target.value !== "all") {
        const filteredMovies = movieObj.results.filter(movie => {
          return movie.genre_ids.includes(parseInt(e.target.value))
        })
        setMovies(filteredMovies)
      }else {
        // return all movies from the movie api
        setMovies(movieObj.results)
      }
  })
  }

  useEffect(() => {
    let movieGenreIds = []
    getMovies()
    .then((movieObj) => {
      // for each movie object, take the object's array of genre ids and combine the array with the empty array movieGenreIds
      movieObj.results.forEach(movie => movieGenreIds = movieGenreIds.concat(movie.genre_ids))
      getGenres()
      .then((genreObj) => {
        // filter out all genre ids that do not appear in the movieGenreIds array
        const filteredGenres = genreObj.genres.filter(genre => movieGenreIds.includes(genre.id))
        setGenres(filteredGenres)
      })
      })
  }, [])

 


  return (
    <>
      <div className="filter">
        <select onChange={handleSelect} className="dropdown"> 
          <option value="" disabled selected hidden>Choose a genre</option>
          <option value="all">All</option>
          {genres.map( genre => <option key={genre.id} value={genre.id} genre={genre}>{genre.name}</option>)}
        </select>
      </div>
    </>
  )
}


