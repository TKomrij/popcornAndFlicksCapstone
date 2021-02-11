export const ActionButton = ({funtionToBeRunWhenClicked, currentState, d}) => {

  return(
    <button onClick={funtionToBeRunWhenClicked}className="poster__button"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path className={currentState ? "active" : "inactive"} d={d}/></svg></button>
  )
}