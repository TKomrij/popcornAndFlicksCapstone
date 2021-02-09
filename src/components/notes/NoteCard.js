import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import "./Note.css"


export const NoteCard = ({note}) => {

    const { deleteNote } = useContext(NoteContext)

  const handleRelease = (noteId, movieId) => {
    deleteNote(noteId, movieId)
  }


return (
    <section className="note">
        <h4 className="note__note">{note.note}</h4>
        <div className="note__delete__flex">
            <button className="note__delete" onClick={() => handleRelease(note.id, note.apiMovieId)}>Delete</button>
        </div>
    </section>
)
}