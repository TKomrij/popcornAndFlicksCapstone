import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MovieContext } from "./MovieProvider"
import { NoteList } from "../notes/NoteList"
import { useParams } from 'react-router-dom';
import { NoteContext } from "../notes/NoteProvider"
import { FavoriteList } from "./favorites/FavoriteList";


export const Saved = () => {
  const { getMovieById } = useContext(MovieContext)
  const [movie, setMovie] = useState({})
 
  const { movieId } = useParams();
  const { notes, getNotes } = useContext(NoteContext)

  useEffect(() => {
    getMovieById(movieId)
    .then((response) => {
      setMovie(response)
      getNotes()
    })
    }, [])


    

  return (
    <>
    <section className="movieFavorites">
      <div className="movieDetails__poster__title__overview">
        <img className="movieDetails__poster" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="movie posters"/>
        <div className="movieDetails__title__overview__save">
          <h2 className="movieDetails__title">{movie.title}</h2>
          <p className="movieDetails__release_date">{movie.release_date}</p>
          <p className="movieDetails__overview">{movie.overview}</p>
         
        </div>
      </div>
    </section>
    <section>
      <FavoriteList />
      <NoteList />
    </section>
    <section>
      <WatchLaterList />
      <NoteList />
    </section>
    </>
  )
}