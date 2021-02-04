import React from "react"
import { Route } from "react-router-dom"
import { MovieList} from "./components/movies/MovieList"
import { MovieProvider } from "./components/movies/MovieProvider"
import { MovieDetail } from "./components/movies/MovieDetails"
import { NoteProvider } from "./components/notes/NoteProvider"
import { FavoriteProvider } from "./components/saved/favorites/FavoriteProvider"
import { FavoriteList } from "./components/saved/favorites/FavoriteList"
import { WatchLaterProvider } from "./components/saved/watchLaters/WatchLaterProvider"
import { WatchLaterList } from "./components/saved/watchLaters/WatchLaterList"
import "./Application.css"

export const ApplicationViews = () => {
  return (
      <>
  
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
   

      
        <NoteProvider>
          <MovieProvider>
            <FavoriteProvider>
              <WatchLaterProvider>
                <Route exact path="/saved">
                    <h1 className="movies__header">Saved Movies</h1>
                    <FavoriteList/>
                </Route>
      
                <Route exact path="/saved">
                  <WatchLaterList/>
                </Route>
              </WatchLaterProvider>
            </FavoriteProvider>
          </MovieProvider>
        </NoteProvider>
    
      </>
  )
}