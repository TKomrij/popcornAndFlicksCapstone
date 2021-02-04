import React, { useState, createContext } from "react"

export const FavoriteContext = createContext()

export const FavoriteProvider = (props) => {
  const [favorites, setFavorites] = useState([])

  const getFavorites = () => {
    return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ec184360c1a6b89d3c57e88523457d51&language=en-US")
    .then(res => res.json())
      .then((movieObj) => {
        setFavorites(movieObj.results)
      })
}


const getFavoritesById = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec184360c1a6b89d3c57e88523457d51&language=en-US`)
    .then(res => res.json())
}

  
  return (
      <FavoriteContext.Provider value={{
          favorites, getFavorites, getFavoritesById
      }}>
          {props.children}
      </FavoriteContext.Provider>
  )
}