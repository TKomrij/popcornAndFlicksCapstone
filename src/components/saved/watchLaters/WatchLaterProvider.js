import React, { useState, createContext } from "react"

export const WatchLaterContext = createContext()

export const WatchLaterProvider = (props) => {
  const [ watchLaters, setWatchLaters] = useState([])

  const getWatchLaters = () => {
    return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ec184360c1a6b89d3c57e88523457d51&language=en-US")
    .then(res => res.json())
    .then((movieObj) => {
      setWatchLaters(movieObj.results)
    })
}

  
  const getWatchLatersById = (id) => {
      return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec184360c1a6b89d3c57e88523457d51&language=en-US`)
      .then(res => res.json())
  }

  
  return (
      <WatchLaterContext.Provider value={{
          watchLaters, getWatchLaters, getWatchLatersById
      }}>
          {props.children}
      </WatchLaterContext.Provider>
  )
}