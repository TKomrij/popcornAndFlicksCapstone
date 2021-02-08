import React, { useState, useEffect, useContext } from "react"
import { MovieContext } from "./MovieProvider"
import { Link } from "react-router-dom"
import "./Movie.css"

export const MovieCard = ({movie, favoriteList}) => {

    const { favoriteMovie, unfavoriteMovie, getFavoriteMovies } = useContext(MovieContext)

const [favoriteState, setFavoriteState] = useState(false)
const currentUser = parseInt(localStorage.getItem("flicks_user"))
useEffect(() => {
    if(isFavoritedMovie()) {
        setFavoriteState(true)
    }
}, [])

const favoriteButtonClicked = (e) => {
    e.preventDefault()

    if(favoriteState === false) {
        favoriteMovie(movie)
    } else {
        getFavoriteMovies(currentUser).then(res => {
            unfavoriteMovie(res.find(favoriteMovie => favoriteMovie.apiMovieId === movie.id).id)
        })
    }

    setFavoriteState(!favoriteState)
}


// check to see if current movie id is in favorited movies or watch laters

const isFavoritedMovie = () => {
    const movieIds = favoriteList.map(movie => movie.apiMovieId)
    return movieIds.includes(movie.id)
}



// if current movie id is in favorited movies array, then favorite state = active, else = inactive

const posterDiv = {
    backgroundImage: 'url(https://image.tmdb.org/t/p/w500' + movie.poster_path + ')',
    width: "200px",
    height: "300px",
}

    return (
    <section className="movie">
        <Link className="movie__link "to={`/movies/detail/${movie.id}`}>
            <div style={posterDiv} className="movie__poster">
                {/* <button onClick={watchLaterButtonClicked} className="poster__button"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path className={watchLaterState} fill="grey" d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg></button> */}
                <button onClick={favoriteButtonClicked}className="poster__button"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path className={favoriteState ? "active" : "inactive"} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button>

            </div>
        </Link>
        <h3 className="movie__title"><Link to={`/movies/detail/${movie.id}`}>{movie.title}</Link></h3>
        <select className="movie__save" name="saveToFavoritesOrWatchLater" id="saveToFavoritesOrWatchLater">
            <option value="0">Save to...</option>
            <option value="Favorites">Favorites</option>
            <option value="WatchLater">Watch Later</option>
        </select>
    </section>
    )
}