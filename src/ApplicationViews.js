import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./components/Home"
import { MovieList} from "./components/movies/MovieList"
import { MovieProvider } from "./components/movies/MovieProvider"

export const ApplicationViews = () => {
  return (
      <>
          {/* Render the location list when http://localhost:3000/ */}
          <MovieProvider>
            <Route exact path="/">
                <Home />
                <MovieList/>
            </Route>
          </MovieProvider>
      </>
  )
}