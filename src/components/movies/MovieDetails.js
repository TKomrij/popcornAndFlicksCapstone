import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import { NoteList } from "../notes/NoteList"
import { useParams } from 'react-router-dom';
import { NoteProvider } from "../notes/NoteProvider"
import { NoteForm } from "../notes/NoteForm"
import { NoteContext } from "../notes/NoteProvider"
import { UserProvider } from "../users/UserProvider"
import "./Details.css"

export const MovieDetail = () => {
  const { getMovieById } = useContext(MovieContext)
  const [movie, setMovie] = useState({})
 
  const { movieId } = useParams();
  const { notes, getNotes } = useContext(NoteContext)

  useEffect(() => {
    console.log("useEffect", movieId)
    getMovieById(movieId)
    .then((response) => {
      setMovie(response)
      getNotes()
    })
    }, [])


    

  return (
    <>
    <section className="movieDetails">
      <div className="movieDetails__poster__title__overview">
        <Link className="movieDetails__back__link "to={`/`}><button className="movieDetails__back">Back</button></Link>
        <img className="movieDetails__poster" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="movie posters"/>
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
    <section>
      <NoteForm movieId={movie.id} />
    </section>
    <section>
      <NoteList notes={notes} />
    </section>
    </>
  )
}