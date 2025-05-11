import { useState } from "react";
import classes from "./Person.module.css";
import EditForm from "../modal/formToEdit/editForm";

export default function Person(props) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className={classes.person}>
      <h2> {props.name}</h2>
      <p> {props.email}</p>
      <p>{props.phone}</p>
      <div className={classes.actions}>
        <button
          onClick={(prev) => setShowEdit((prev) => !prev)}
          className={`${classes.button} ${classes.edit}`}
        >
          Edit
        </button>
        <button
          className={`${classes.button} ${classes.delete}`}
          //activate the removeContacts func from contacts page
          onClick={() => props.func(props.id)}
        >
          Delete
        </button>
      </div>
      {showEdit && (
        <EditForm
          contact={props}
          func={setShowEdit}
          editContact={props.editContact}
        />
      )}
    </div>
  );
}
