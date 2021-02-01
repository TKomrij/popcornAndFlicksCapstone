import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const NoteContext = createContext()

// This component establishes what data can be used.
export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])

    const getNotes = () => {
        return fetch("http://localhost:8088/notes?_expand=user")
        .then(res => res.json())
        .then(setNotes)
    }

    const addNote = noteObj => {
        return fetch("http://localhost:8088/notes?_expand=user&_expand=movie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteObj)
        })
        .then(getNotes)
    }

    const getNoteById = (id) => {
        return fetch(`http://localhost:8088/notes/${id}`)
            .then(res => res.json())
    }

    const updateNote = note => {
        return fetch(`http://localhost:8088/notes/${note.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(note)
        })
          .then(getNotes)
      }

    
    return (
        <NoteContext.Provider value={{
            notes, getNotes, addNote, getNoteById, updateNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}