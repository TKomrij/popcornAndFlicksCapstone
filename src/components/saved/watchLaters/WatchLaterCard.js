import React from "react"
import { Link } from "react-router-dom"
import "../../movies/Movie.css"

export const WatchLaterCard = ({watchLater}) => (
    <section className="movie">
        <Link className="movie__link" to={`/movies/detail/${watchLater.apiMovieId}`}><img className="movie__poster" src={"https://image.tmdb.org/t/p/w500" + watchLater.poster_path} alt="movie poster" width="200" height="300"/></Link>
        <h3 className="movie__title"><Link to={`/movies/detail/${watchLater.id}`}>{watchLater.title}</Link></h3>
    </section>
)