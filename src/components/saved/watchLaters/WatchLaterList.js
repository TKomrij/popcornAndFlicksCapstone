import React, { useContext, useEffect } from "react"
import { WatchLaterContext } from "./WatchLaterProvider"
import {WatchLaterCard } from "./WatchLaterCard"
import "../../movies/Movie.css"

export const WatchLaterList = () => {
  const { watchLaters, getWatchLaters } = useContext(WatchLaterContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    getWatchLaters()
  
  }, [])

  return (
    <div className="movies watchLaters">
      {
        watchLaters.map(watchLater => {
          return <WatchLaterCard key={watchLater.id} watchLater={watchLater} />
        })
      }
    </div>
  )
}