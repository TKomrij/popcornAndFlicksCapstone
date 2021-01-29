import React from "react"
import { Route } from "react-router-dom"
import { MovieList} from "./components/movies/MovieList"
import { MovieProvider } from "./components/movies/MovieProvider"
import {  MovieDetail } from "./components/movies/MovieDetails"

export const ApplicationViews = () => {
  return (
      <>
          <MovieProvider>
            <Route exact path="/">
                <h3>Movies</h3>
                <MovieList/>
            </Route>

            <Route exact path="/movies/detail/:movieId(\d+)">
                    <MovieDetail />
                </Route>
          </MovieProvider>
      </>
  )
}