import React, { useContext, useEffect } from "react"
import { GenreContext } from "./FilterProvider"

export const Filter = () => {
  const { genres, getGenres } = useContext(GenreContext)
  
  useEffect(() => {
    getGenres()
      console.log("list of genres", genres)
  }, [])

  return (
    <select> 
      <option>{
        genres.map( genre => genre.name)
      }</option>
    </select>
   
  )
}



