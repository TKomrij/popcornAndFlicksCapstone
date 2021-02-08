import React, { useState, createContext } from "react"
import { v4 as uuidv4 } from 'uuid';

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
        return fetch("http://localhost:8088/favoriteMovies")
        .then(res => res.json())
        .then(res => res.filter(movie => movie.userId === userId))
    }

    const favoriteMovie = movieObj => {
    
        const currentUserId = parseInt(localStorage.getItem("flicks_user"))
        const favortieMovieObject = {
            id: uuidv4(),
            userId: currentUserId,
            apiMovieId: movieObj.id
        }
     
        return fetch("http://localhost:8088/favoriteMovies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favortieMovieObject)
        })
    }

    const unfavoriteMovie = (id) => {
        return fetch(`http://localhost:8088/favoriteMovies/${id}`, {
            method: "DELETE",
        })
    }

  
    return (
        <MovieContext.Provider value={{
            movies, getMovies, getMovieById, getFavoriteMovies, favoriteMovie, unfavoriteMovie
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}