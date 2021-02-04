import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = ({notes}) => {
  const currentUser = parseInt(localStorage.getItem("flicks_user"))
  const { deleteNote } = useContext(NoteContext)

  const handleRelease = (noteId) => {
    deleteNote(noteId)
  }

  return (
    <div className="notes">
      {
        notes.filter(note => note.userId === currentUser).map(note => {
          return <NoteCard key={note.id} note={note} handleRelease={handleRelease} />
        })
      }
    </div>
  )
}