import React from "react"
import { Link } from "react-router-dom"
import "./Movie.css"

export const MovieCard = ({movie}) => (
    <section className="movie">
            <Link to={`/movies/detail/${movie.id}`}><img src= {"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="Girl in a jacket" width="300" height="400"/></Link>
            <h3 className="movie__title"><Link to={`/movies/detail/${movie.id}`}>{movie.title}</Link></h3>
            <button>Save</button>
    </section>
)