import React, { useContext, useEffect, useState } from "react"
import { GenreContext } from "./FilterProvider"
import { MovieContext } from "../movies/MovieProvider"
import "./Filter.css"

export const Filter = ({genre}) => {
  const { genres, getGenres } = useContext(GenreContext)

  const { movies } = useContext(MovieContext)
  
  const handleSelect=(e)=> {
    movies.filter(movie => movie.genreIds === genre.id)
  }

  useEffect(() => {
    getGenres()
    .then(handleSelect)
  }, [])

 


  return (
    <>
      <div className="filter">
        <select onChange={handleSelect} className="dropdown"> 
          <option value="" disabled selected hidden>Choose a genre</option>
          {genres.map( genre => <option key={genre.id} value={genre.id} genre={genre}>{genre.name}</option>)}
        </select>
      </div>
    </>
  )
}


