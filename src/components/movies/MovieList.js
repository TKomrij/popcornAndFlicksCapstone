import React, { useContext, useEffect } from "react"
import { MovieContext } from "./MovieProvider"
import { MovieCard } from "./MovieCard"
import "./Movie.css"

export const MovieList = () => {
  const { movies, getMovies } = useContext(MovieContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("MovieList: useEffect - getMovies")
    getMovies()
  
  }, [])

  return (
    <div className="movies">
      {console.log("MovieList: Render", movies)}
      {
        movies.map(movie => {
          return <MovieCard key={movie.apiId} movie={movie} />
        })
      }
    </div>
  )
}

