import React, { useState, createContext } from "react"

export const GenreContext = createContext()

export const GenreProvider = (props) => {
  const [genres, setGenres] = useState([])

  const getGenres = () => {
      return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=ec184360c1a6b89d3c57e88523457d51&language=en-US")
      .then(res => res.json())
      .then((genreObj) => {
        setGenres(genreObj.genres)
      })
  }

  return (
    <GenreContext.Provider value={{
        genres, getGenres
    }}>
        {props.children}
    </GenreContext.Provider>
)
}