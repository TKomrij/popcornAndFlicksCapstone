import React, { useState, useEffect, useContext } from "react"
import {ActionButton } from "./ActionButton"
import { MovieContext } from "./MovieProvider"
import { Link } from "react-router-dom"
import "./Movie.css"

export const MovieCard = ({movie, favoriteList, watchLaterList}) => {
const {favoriteButtonClicked, isFavoritedMovie, watchLaterButtonClicked, isWatchLaterMovie } = useContext(MovieContext)
const [watchLaterState, setWatchLaterState] = useState(false)
const [favoriteState, setFavoriteState] = useState(false)

useEffect(() => {
    console.log(favoriteList)
    if(isFavoritedMovie(favoriteList, movie)) {
        setFavoriteState(true)
    }
    if(isWatchLaterMovie(watchLaterList, movie)) {
        setWatchLaterState(true)
    }
}, [favoriteList, watchLaterList])


const posterDiv = {
    backgroundImage: 'url(https://image.tmdb.org/t/p/w500' + movie.poster_path + ')',
    width: "200px",
    height: "300px",
}

    return (
    <section className="movie">
        <Link className="movie__link "to={`/movies/detail/${movie.id}`}>
            <div style={posterDiv} className="movie__poster">
                <ActionButton funtionToBeRunWhenClicked={watchLaterButtonClicked(movie, watchLaterState, setWatchLaterState)} currentState={watchLaterState} d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                <ActionButton funtionToBeRunWhenClicked={favoriteButtonClicked(movie, favoriteState, setFavoriteState)} currentState={favoriteState} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </div>
        </Link>
        <h3 className="movie__title"><Link to={`/movies/detail/${movie.id}`}>{movie.title}</Link></h3>
    </section>
    )
}