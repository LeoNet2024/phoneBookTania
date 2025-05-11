import classes from "./Person.module.css";

export default function Person(props) {
  return (
    <div className={classes.person}>
      <h2> {props.name}</h2>
      <p> {props.email}</p>
      <p>{props.phone}</p>
      <div className={classes.actions}>
        <button className={`${classes.button} ${classes.edit}`}>Edit</button>
        <button
          className={`${classes.button} ${classes.delete}`}
          //activate the removeContacts func from contacts page
          onClick={() => props.func(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
