import React from "react";

import classes from "./actions.module.css";
export default function RecentContact(props) {
  console.log(props);
  return (
    <div className={classes.actionsGrid}>
      {props.recent.map((item, index) => (
        <div className={classes.card} key={index}>
          <div className={classes.text}>
            <img src={item.src} alt="" />
          </div>
          <div className={classes.text}>{item.name}</div>
          <div className={classes.text}>{item.email}</div>
          <div className={classes.text}>{item.group}</div>
        </div>
      ))}
    </div>
  );
}
