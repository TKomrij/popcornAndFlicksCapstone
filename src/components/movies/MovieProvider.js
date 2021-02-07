import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const MovieContext = createContext()

// This component establishes what data can be used.
export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ec184360c1a6b89d3c57e88523457d51&language=en-US")
        .then(res => res.json())
        .then((movieObj) => {
          setMovies(movieObj.results)
        })
    }

    const getMovieById = (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec184360c1a6b89d3c57e88523457d51&language=en-US`)
            .then(res => res.json())
    }


    const getFavoriteMovies = (userId) => {
        console.log(userId)
        return fetch("http://localhost:8088/favoriteMovies")
        .then(res => res.json())
        .then(res => res.filter(movie => movie.userId === userId))
    }

  
    return (
        <MovieContext.Provider value={{
            movies, getMovies, getMovieById, getFavoriteMovies
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}