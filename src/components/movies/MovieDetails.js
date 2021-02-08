import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { NoteList } from "../notes/NoteList"
import { useParams } from 'react-router-dom';
import { NoteForm } from "../notes/NoteForm"
import { NoteContext } from "../notes/NoteProvider"
import "./Details.css"
import { ActionButton } from "./ActionButton";



export const MovieDetail = () => {
  const { getMovieById, favoriteButtonClicked, getFavoriteMovies, isFavoritedMovie, watchLaterButtonClicked, getWatchLaterMovies, isWatchLaterMovie } = useContext(MovieContext)
  const { movieId } = useParams();
  const [movie, setMovie] = useState({})
  const [favoriteState, setFavoriteState] = useState(false)
  const [watchLaterState, setWatchLaterState] = useState(false)
  const { notes, getNotesByMovieId } = useContext(NoteContext)
  const currentUser = parseInt(localStorage.getItem("flicks_user"))

  useEffect(() => {
    getMovieById(movieId)
    .then((movieObj) => {
      setMovie(movieObj) 
      getFavoriteMovies(currentUser)
      .then(movieList => {
        if(isFavoritedMovie(movieList, movieObj)) {
          setFavoriteState(true)
      }
      })
    })
    getMovieById(movieId)
    .then((movieObj) => {
      setMovie(movieObj) 
      getWatchLaterMovies(currentUser)
      .then(movieList => {
        if(isWatchLaterMovie(movieList, movieObj)) {
          setWatchLaterState(true)
      }
      })
    })
    .then(() => {
      getNotesByMovieId(movieId)
      }) 
}, [])


  return (
    <>
    <section className="movieDetails">
      <div className="movieDetails__poster__title__overview">
        <img className="movieDetails__poster" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="movie posters"/>
        <div className="movieDetails__title__overview__save">
          <h2 className="movieDetails__title">{movie.title}</h2>
          <p className="movieDetails__release_date">{movie.release_date}</p>
          <p className="movieDetails__overview">{movie.overview}</p>
          <div className="movieDetails__action_buttons">
            <ActionButton funtionToBeRunWhenClicked={watchLaterButtonClicked(movie, watchLaterState, setWatchLaterState)} currentState={watchLaterState} d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            <ActionButton funtionToBeRunWhenClicked={favoriteButtonClicked(movie, favoriteState, setFavoriteState)} currentState={favoriteState} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </div>
        </div>
      </div>
    </section>
    <section>
      <NoteForm apiMovieId={movieId} />
    </section>
    <section>
      <NoteList notes={notes} />
    </section>
    </>
  )
}