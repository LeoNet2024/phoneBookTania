import React from "react";
import classes from "./actions.module.css";

export default function RecentContact(props) {
  return (
    <div className={classes.actionsGrid}>
      {props.recent.map((item, index) => (
        <div className={classes.card} key={index}>
          <img className={classes.avatar} src={item.src} alt={item.name} />
          <h3 className={classes.name}>{item.name}</h3>
          <p className={classes.email}>{item.email}</p>
          <span className={classes.group}>{item.group}</span>
        </div>
      ))}
    </div>
  );
}
