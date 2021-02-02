import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { NoteContext } from "./NoteProvider"
import { MovieContext } from "../movies/MovieProvider"
import {UserContext } from "../users/UserProvider"
import "./Note.css"


export const NoteForm = ({apiId}) => {
    const { addNote, getNoteById, updateNote } = useContext(NoteContext)
    const { getMovies } = useContext(MovieContext)
    const { getUsers } = useContext(UserContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

   const [user] = useState({
    id: 0
  })
    const [movie] = useState({
      id: 0
    })
    const [note, setNote] = useState({
      note: ""
    });

    const history = useHistory();
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
                apiId: parseInt(apiId),
                userId: parseInt(user.id)
            })
            // .then(() => history.push(`/movies/detail/:movieId(\d+)`))
          }else {
            addNote({
                note: note.note,
                apiId: parseInt(apiId),
                userId: parseInt(user.id)
            })
          }
        }
      }

      useEffect(() => {
        getUsers()
        .then(getMovies)
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
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() // Prevent browser from submitting the form and refreshing the page
              handleSaveNote()
            }}>
          {noteId ? "Edit Note" : "Add Note"}</button>
        </form>
      )
  }
