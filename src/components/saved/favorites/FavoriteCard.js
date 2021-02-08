import React from "react"
import { Link } from "react-router-dom"
import "../../movies/Movie.css"

export const FavoriteCard = ({favorite}) => (

    <section className="movie">
        <Link className="movie__link" to={`/movies/detail/${favorite.apiMovieId}`}><img className="movie__poster" src={"https://image.tmdb.org/t/p/w500" + favorite.poster_path} alt="movie poster" width="200" height="300"/></Link>
        <h3 className="movie__title"><Link to={`/movies/detail/${favorite.id}`}>{favorite.title}</Link></h3>
        <div className="delete__save">
            <button className="movie__delete">Delete</button>
        </div>
    </section>
)