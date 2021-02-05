import React from "react"
import "./Note.css"


export const NoteCard = ({note, handleRelease}) => {
return (
    <section className="note">
        <h4 className="note__note">{note.note}</h4>
        <div className="note__delete__flex">
            <button className="note__delete" onClick={() => handleRelease(note.id)}>Delete</button>
        </div>
    </section>
)
}