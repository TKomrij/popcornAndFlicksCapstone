import React from "react"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = ({notes}) => {
  const currentUser = parseInt(localStorage.getItem("flicks_user"))
  
  return (
    <div className="notes">
      {
        notes.filter(note => note.userId === currentUser).map(note => {
          return <NoteCard key={note.id} note={note} />
        })
      }
    </div>
  )
}