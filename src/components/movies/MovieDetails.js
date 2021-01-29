import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { useParams } from 'react-router-dom';
import "./Movie.css"

export const MovieDetail = () => {
  const { getMovieById } = useContext(MovieContext)

  const [movie, setMovie] = useState({})

    const { movieId } = useParams();

  useEffect(() => {
    console.log("useEffect", movieId)
    getMovieById(movieId)
    .then((response) => {
      setMovie(response)
    })
    }, [])

    
   
  

  return (
    <section className="movieDetails">
      <img className="movieDetails__poster" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} width="300" height="400"/>
      <div className="movieDtailes__title">{movie.title}</div>
      <h3 className="movieDetails__overview">{movie.overview}</h3>
      <h3 className="movieDetails__overview">{movie.genre_ids}</h3>
      {/* <div className="movieDetails__genre">{movie.genre_ids.map(genre => genre.id).join(", ")}</div> */}
    </section>
  )
}