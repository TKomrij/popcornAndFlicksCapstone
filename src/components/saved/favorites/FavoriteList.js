import React, { useContext, useEffect } from "react"
import {FavoriteContext } from "./FavoriteProvider"
import {FavoriteCard } from "./FavoriteCard"
import "../../movies/Movie.css"

export const FavoriteList = () => {
  const { favorites, getFavorites } = useContext(FavoriteContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <div className="movies favorites">
      {
        favorites.map(favorite => {
          return <FavoriteCard key={favorite.id} favorite={favorite} />
        })
      }
    </div>
  )
}