import React, { useContext, useEffect } from "react"
import { WatchLaterContext } from "./WatchLaterProvider"
import {WatchLaterCard } from "./WatchLaterCard"
import "../../movies/Movie.css"

export const WatchLaterList = () => {
  const { watchLaters, getWatchLaters } = useContext(WatchLaterContext)
  const currentUser = parseInt(localStorage.getItem("flicks_user"))

  //useEffect - reach out to the world for something
  useEffect(() => {
    getWatchLaters()
  
  }, [])

  return (
    <div className="movies watchLaters">
      {
       watchLaters.filter(watchLater => watchLater.userId === currentUser).map(watchLater => {
          return <WatchLaterCard key={watchLater.id} watchLater={watchLater} />
        })
      }
    </div>
  )
}