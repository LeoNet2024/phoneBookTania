import classes from "./addForm.module.css";
export default function AddForm(props) {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <span className={classes.close} onClick={props.func}>
          X
        </span>
        <h2>Add contact</h2>
        <form action="" method="post">
          <p>
            name <input type="text" />
          </p>
          <p>
            email
            <input type="email " />
          </p>
          <p>
            phone
            <input type="phone" />
          </p>
          <button>Add contact</button>
        </form>
      </div>
    </div>
  );
}
