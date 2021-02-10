import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { MovieCard } from "./MovieCard"
import "./Movie.css"

export const MovieList = () => {
  const { movies, getMovies, getFavoriteMovies, getWatchLaterMovies } = useContext(MovieContext)
  const currentUser = parseInt(localStorage.getItem("flicks_user"))

  const [favoriteList, setFavoriteList] = useState([])
  const [watchLaterList, setWatchLaterList] = useState([])


  //useEffect - reach out to the world for something
  useEffect(() => {
    getMovies()
    getFavoriteMovies(currentUser)
    .then(res => {
      setFavoriteList(res)
    })
    getWatchLaterMovies(currentUser)
    .then(res => {
      setWatchLaterList(res)
    })
  }, [])

  return (
    <div className="movies">
      {
        movies.map(movie => {
          return <MovieCard key={movie.id} movie={movie} favoriteList={favoriteList} watchLaterList={watchLaterList} />
        })
      }
    </div>
  )
}

