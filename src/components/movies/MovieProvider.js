import React, { useState, createContext } from "react"


// The context is imported and used by individual components that need data
export const MovieContext = createContext()

// This component establishes what data can be used.
export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])
    const currentUser = parseInt(localStorage.getItem("flicks_user"))

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
    console.log(movieObj)
        const currentUserId = parseInt(localStorage.getItem("flicks_user"))
        const favortieMovieObject = {
            id: 0,
            userId: currentUserId,
            apiMovieId: movieObj.id,
            poster_path: movieObj.poster_path,
            title: movieObj.title,
            overview: movieObj.overview
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


    const getWatchLaterMovies = (userId) => {
        return fetch("http://localhost:8088/watchLaterMovies")
        .then(res => res.json())
        .then(res => res.filter(movie => movie.userId === userId))
    }

    const watchLaterMovie = movieObj => {
    console.log(movieObj)
        const currentUserId = parseInt(localStorage.getItem("flicks_user"))
        const watchLaterMovieObject = {
            id: 0,
            userId: currentUserId,
            apiMovieId: movieObj.id,
            poster_path: movieObj.poster_path,
            title: movieObj.title,
            overview: movieObj.overview
        }
     
        return fetch("http://localhost:8088/watchLaterMovies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(watchLaterMovieObject)
        })
    }

    const deleteWatchLaterMovie = (id) => {
        return fetch(`http://localhost:8088/watchLaterMovies/${id}`, {
            method: "DELETE",
        })
    }


    const favoriteButtonClicked = (movieClicked, favoriteState, setFavoriteState) => e => {
        e.preventDefault()
    
        if(favoriteState === false) {
            favoriteMovie(movieClicked)
        } else {
            // this is to get the id from the favorited Movies list to be able to delete it
            getFavoriteMovies(currentUser).then(res => {
                unfavoriteMovie(res.find(favoriteMovie => favoriteMovie.apiMovieId === movieClicked.id).id)
            })
        }
    
        setFavoriteState(!favoriteState)
    }

    const isFavoritedMovie = (favoriteList, movie) => {
        const movieIds = favoriteList.map(movie => movie.apiMovieId)
        return movieIds.includes(movie.id)
    }


  
    return (
        <MovieContext.Provider value={{
            movies, getMovies, getMovieById, getFavoriteMovies, favoriteMovie, unfavoriteMovie,  getWatchLaterMovies, watchLaterMovie, deleteWatchLaterMovie, favoriteButtonClicked, isFavoritedMovie
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}