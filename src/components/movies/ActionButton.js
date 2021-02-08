export const ActionButton = ({funtionToBeRunWhenClicked, currentState, d}) => {

  return(
    <button onClick={funtionToBeRunWhenClicked}className="poster__button"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path className={currentState ? "active" : "inactive"} d={d}/></svg></button>
  )
}

// "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"


// M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z