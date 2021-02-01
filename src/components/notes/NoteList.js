import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" 
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { notes, getNotes } = useContext(NoteContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("NoteList: useEffect - getNotes")
    getNotes()
  
  }, [])


  return (
    <div className="notes">
      {console.log("NoteList: Render", notes)}
      <button onClick={() => {history.push("/notes/create")}}>
            Add note
      </button>
      {
        notes.map(note => {
          return <NoteCard key={note.id} note={note} />
        })
      }
    </div>
  )
}