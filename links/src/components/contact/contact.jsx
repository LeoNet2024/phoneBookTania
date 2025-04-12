import classes from "./contact.module.css";

export default function Contact(props) {
  return (
    <div className={classes.contact}>
      <p>name: {props.name}</p>
      <p>email: {props.email}</p>
      <p>phone: {props.phone}</p>
    </div>
  );
}
