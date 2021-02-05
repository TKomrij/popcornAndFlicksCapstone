import React from "react"
import { Link } from "react-router-dom"
import "../../movies/Movie.css"

export const WatchLaterCard = ({watchLater}) => (
    <section className="movie">
        <Link className="movie__link" to={`/movies/detail/${watchLater.id}`}><img className="movie__poster" src={"https://image.tmdb.org/t/p/w500" + watchLater.poster_path} alt="movie poster" width="200" height="300"/></Link>
        <h3 className="movie__title"><Link to={`/movies/detail/${watchLater.id}`}>{watchLater.title}</Link></h3>
        <div className="delete__save">
            <select className="movie__save" name="saveToFavoritesOrWatchLater" id="saveToFavoritesOrWatchLater">
                <option value="0">Save to...</option>
                <option value="Favorites">Favorites</option>
                <option value="WatchLater">Watch Later</option>
            </select>
            <button className="movie__delete">Delete Movie</button>
        </div>
    </section>
)