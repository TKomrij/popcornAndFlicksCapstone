import React from "react"
import "./Note.css"


export const NoteCard = ({note, handleRelease}) => {
return (
    <section className="note">
        <h3 className="note__user__name">{note.user?.name}</h3>
        <p className="note__note">{note.note}</p>
        <button onClick={() => handleRelease(note.id)}>delete Note</button>
    </section>
)
}