import React, { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { NoteContext } from "./NoteProvider"
import { MovieContext } from "../movies/MovieProvider"
import "./Note.css"


export const NoteForm = ({apiMovieId}) => {
    const { addNote, getNoteById, updateNote } = useContext(NoteContext)
    const { getMovies } = useContext(MovieContext)
    const currentUser = parseInt(localStorage.getItem("flicks_user"))

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */


    const [note, setNote] = useState({
      note: "",
      userId: currentUser,
      apiMovieId: `${apiMovieId}`
    });

    const [isLoading, setIsLoading] = useState(true);
    const { noteId } = useParams();

    
    const handleControlledInputChange = (event) => {
      const newNote = { ...note }
      let selectedVal = event.target.value

      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      } newNote[event.target.id] = selectedVal
      // update state
      setNote(newNote)
    }


      const handleSaveNote = () => {
        if ((note.note) === "") {
            window.alert("Please write a note")
        } else {
          setIsLoading(true);
          if (noteId){
            updateNote({
                id: note.id,
                note: note.note,
                apiMovieId: parseInt(`${note.apiMovieId}`),
                userId: currentUser
            })
          }else {
            addNote({
                note: note.note,
                apiMovieId: parseInt(`${note.apiMovieId}`),
                userId: currentUser
            })
          }
        }
      }

      useEffect(() => {
        getMovies()
        .then(() => {
          if (noteId) {
            getNoteById(noteId)
            .then(note => {
                setNote(note)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
        }) 
      }, [])

      return (
        <form className="noteForm">
          <h2 className="noteForm__title">{noteId ? "Edit Note" : "Add Note"}</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="noteForm__note">Write a note: </label>
              <input type="text" id="note" required autoFocus className="form-control"
              placeholder="Notes"
              onChange={handleControlledInputChange}
              value={note.note}/>
            </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={event => {
              event.preventDefault() // Prevent browser from submitting the form and refreshing the page
              handleSaveNote()
            }}>
          {noteId ? "Edit Note" : "Add Note"}</button>
        </form>
      )
  }
