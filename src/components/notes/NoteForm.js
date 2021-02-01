import React, { useContext, useState} from "react"
import { useHistory, useParams } from 'react-router-dom';
import { NoteContext } from "./NoteProvider"
import "./Note.css"


export const NoteForm = () => {
    const { addNote} = useContext(NoteContext)
    const [isLoading] = useState(true);

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [note, setNote] = useState({
      note: "",
      movieId: 0,
      userId: 0
    });

    const { noteId } = useParams();
    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    // useEffect(() => {
    //   getCustomers().then(getLocations)
    // }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newNote = { ...note }
      let selectedVal = event.target.value
      // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
    
      newNote[event.target.id] = selectedVal
      // update state
      setNote(newNote)
    }

    const handleClickSaveNote = () => {
      if ((note.note) === "") {
        window.alert("Please write a note")
    } else {
        //POST - add
        addNote({
          note: note.note
          
        })
        .then(() => history.push("/movies/detail/:movieId(\d+)"))
      }
    }
  


    return (
      <form className="noteForm">
        <h2 className="noteForm__title">{noteId ? "Edit Note" : "Add Note"}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="noteNote">Write your notes...</label>
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
            handleClickSaveNote(event)
          }}>
        {noteId ? "Save Note" : "Add Note"}</button>
      </form>
    )
  }
