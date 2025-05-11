import classes from "./PersonList.module.css";
import Contact from "../person/Person";
import Person from "../person/Person";
import { useState } from "react";

// this component return list of contacts that given from DB
export default function PersonList(props) {
  // this action create list of persons
  const persons = props.contacts.map((el) => {
    return (
      <Person
        name={el.name}
        email={el.email}
        phone={el.phone}
        key={crypto.randomUUID()}
        id={el.id}
        func={props.func}
      />
    );
  });

  return <div className={classes.contactsList}>{persons}</div>;
}
