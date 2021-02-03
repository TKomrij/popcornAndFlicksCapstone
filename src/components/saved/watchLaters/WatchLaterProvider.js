import React, { useState, createContext } from "react"

export const WatchLaterContext = createContext()

export const WatchLaterProvider = (props) => {
  const [ watchLaters, setWatchLaters] = useState([])

  const getWatchLaters = () => {
      return fetch("http://localhost:8088/watchLaters")
      .then(res => res.json())
      .then(setWatchLaters)
  }

  
  return (
      <WatchLaterContext.Provider value={{
          watchLaters, getWatchLaters
      }}>
          {props.children}
      </WatchLaterContext.Provider>
  )
}