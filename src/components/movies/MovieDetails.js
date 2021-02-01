import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import { useParams } from 'react-router-dom';
import "./Details.css"

export const MovieDetail = () => {
  const { getMovieById } = useContext(MovieContext)
  const [movie, setMovie] = useState({})
  const history = useHistory()
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
      <div className="movieDetails__poster__title__overview">
        <Link className="movieDetails__back__link "to={`/`}><button className="movieDetails__back">Back</button></Link>
        <img className="movieDetails__poster" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="movie posters"/>
        <div className="movieDetails__title__overview__save">
          <h2 className="movieDetails__title">{movie.title}</h2>
          <p className="movieDetails__release_date">{movie.release_date}</p>
          <p className="movieDetails__overview">{movie.overview}</p>
          <select className="movieDetails__save" name="saveToFavoritesOrWatchLater" id="saveToFavoritesOrWatchLater">
            <option value="0">Save to...</option>
            <option value="Favorites">Favorites</option>
            <option value="WatchLater">Watch Later</option>
          </select>
        </div>
      </div>
    </section>
  )
}