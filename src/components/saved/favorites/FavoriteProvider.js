import React, { useState, createContext } from "react"

export const FavoriteContext = createContext()

export const FavoriteProvider = (props) => {
  const [favorites, setFavorites] = useState([])

  const getFavorites = () => {
    return fetch("http://localhost:8088/favoriteMovies")
    .then(res => res.json())
      .then(setFavorites)
}
  
  return (
      <FavoriteContext.Provider value={{
          favorites, getFavorites
      }}>
          {props.children}
      </FavoriteContext.Provider>
  )
}