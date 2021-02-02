import React from "react"
import { Route } from "react-router-dom"
import { MovieList} from "./components/movies/MovieList"
import { MovieProvider } from "./components/movies/MovieProvider"
import { MovieDetail } from "./components/movies/MovieDetails"
import "./Application.css"
import { NoteProvider } from "./components/notes/NoteProvider"
import { UserProvider } from "./components/users/UserProvider"

export const ApplicationViews = () => {
  return (
      <>
      <UserProvider>
      <NoteProvider>
        <MovieProvider>
            <Route exact path="/">
                <h1 className="movies__header">Popular Movies This Week</h1>
                <MovieList/>
            </Route>

            <Route exact path="/movies/detail/:movieId(\d+)">
                <MovieDetail />
            </Route>
        </MovieProvider>
      </NoteProvider>
      </UserProvider>
       
      </>
  )
}