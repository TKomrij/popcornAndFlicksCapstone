import React from "react"
import { Link } from "react-router-dom"
import "./Movie.css"

export const MovieCard = ({movie}) => (
    <section className="movie">
        <Link className="movie__link "to={`/movies/detail/${movie.id}`}><img className="movie__poster" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="movie poster" width="200" height="300"/></Link>
        <h3 className="movie__title"><Link to={`/movies/detail/${movie.id}`}>{movie.title}</Link></h3>
        <select className="movie__save" name="saveToFavoritesOrWatchLater" id="saveToFavoritesOrWatchLater">
            <option value="0">Save to...</option>
            <option value="Favorites">Favorites</option>
            <option value="WatchLater">Watch Later</option>
        </select>
    </section>
)