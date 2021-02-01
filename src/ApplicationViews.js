import React from "react"
import { Route } from "react-router-dom"
import { MovieList} from "./components/movies/MovieList"
import { MovieProvider } from "./components/movies/MovieProvider"
import { MovieDetail } from "./components/movies/MovieDetails"
import { NoteList } from "./components/notes/NoteList"
import { NoteProvider } from "./components/notes/NoteProvider"
import { NoteForm } from "./components/notes/NoteForm"
import "./Application.css"

export const ApplicationViews = () => {
  return (
      <>
        <MovieProvider>
            <Route exact path="/">
                <h1 className="movies__header">Movies</h1>
                <MovieList/>
            </Route>

            <Route exact path="/movies/detail/:movieId(\d+)">
                <MovieDetail />
            </Route>
        </MovieProvider>

        <MovieProvider> 
            <NoteProvider>
                <Route path="/notes/create">
                    <NoteForm />
                </Route>

                <Route path="/movies/detail/:movieId(\d+)">
                    <NoteList/>
                </Route>

            </NoteProvider>
        </MovieProvider>
      </>
  )
}