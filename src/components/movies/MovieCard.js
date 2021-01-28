import React from "react"
import "./Movie.css"

export const MovieCard = ({movie}) => (
    <section className="movie">
        <h3 className="movie__id">Movie ID: {movie.results}</h3>
        <div className="movie__name">Name: {movie?.title}</div>
    </section>
)