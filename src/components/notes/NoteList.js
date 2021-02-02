import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"

export const NoteList = ({notes}) => {

  //useEffect - reach out to the world for something
  const { deleteNote } = useContext(NoteContext)

  const handleRelease = (noteId) => {
    deleteNote(noteId)
  }

  return (
    <div className="notes">
      {console.log("NoteList: Render", notes)}
      {
        notes.map(note => {
          return <NoteCard key={note.id} note={note} handleRelease={handleRelease} />
        })
      }
    </div>
  )
}