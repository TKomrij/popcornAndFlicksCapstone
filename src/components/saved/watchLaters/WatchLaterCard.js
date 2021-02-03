import React from "react"
import { Link } from "react-router-dom"
import "./WatchLater.css"

export const WatchLaterCard = ({watchLater}) => (
    <section className="movie">
        <Link className="movie__link" to={`/movies/detail/${watchLater.id}`}><img className="movie__poster" src={"https://image.tmdb.org/t/p/w500" + watchLater.poster_path} alt="Girl in a jacket" width="300" height="400"/></Link>
        <h3 className="movie__title"><Link to={`/movies/detail/${watchLater.id}`}>{watchLater.title}</Link></h3>
        <select className="movie__save" name="saveToFavoritesOrWatchLater" id="saveToFavoritesOrWatchLater">
            <option value="0">Save to...</option>
            <option value="Favorites">Favorites</option>
            <option value="WatchLater">Watch Later</option>
        </select>
    </section>
)