import classes from "./group.module.css";

export default function Group({ name, percentage }) {
  return (
    <div className={classes.groupCard}>
      <h3>{name}</h3>
      <div className={classes.progressBar}>
        <div
          className={classes.progressFill}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p>{percentage}% complete</p>
    </div>
  );
}
