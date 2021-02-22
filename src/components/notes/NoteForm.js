import React, { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { NoteContext } from "./NoteProvider"
import { MovieContext } from "../movies/MovieProvider"
import "./Note.css"


export const NoteForm = ({apiMovieId}) => {
    const { addNote, getNoteById } = useContext(NoteContext)
    const { getMovies, setMovies } = useContext(MovieContext)
    const currentUser = parseInt(localStorage.getItem("flicks_user"))


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
            addNote({
                note: note.note,
                apiMovieId: parseInt(`${note.apiMovieId}`),
                userId: currentUser
            }, apiMovieId)
          }
        }

      useEffect(() => {
        getMovies()
        .then((movieObj) => {
        setMovies(movieObj.results)
      })
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
          <fieldset>
            <div className="form-group">
              <label htmlFor="noteForm__note">Write a note: </label>
              <input className="noteForm__input" type="text" id="note" required autoFocus className="form-control"
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
