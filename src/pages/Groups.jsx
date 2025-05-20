import PersonList from "../components/contactsList/PersonList";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import classes from "./page.module.css";
import groupClasses from "./group.module.css";
import { useState } from "react";
import SearchBar from "../components/searchBar/searchBar";

export default function Groups(props) {
  const [selectedGroup, setSelectedGroup] = useState("family");

  const [filterContacts, setFilterContacts] = useState(props.contacts);

  // setting contacts by group

  function handleClick(group) {
    if (group === "all") {
      setFilterContacts(props.contacts);
      return;
    }
    // setting the select
    setSelectedGroup(group);
    //create new list
    let filtered = props.contacts.filter(
      (el) => el.group.toLowerCase() === selectedGroup
    );

    setFilterContacts(filtered);
  }

  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <h2>Groups</h2>
      <div className={groupClasses.groupWrap}>
        <div>
          <button onClick={() => handleClick("all")}>All</button>
        </div>
        <div>
          <button onClick={() => handleClick("family")}>Family</button>
        </div>
        <div>
          <button onClick={() => handleClick("work")}>Work</button>
        </div>
        <div>
          <button onClick={() => handleClick("school")}>School</button>
        </div>
      </div>
      <main>
        <SearchBar contacts={props.contacts} setContacts={setFilterContacts} />

        <PersonList contacts={filterContacts} />
      </main>
      <Footer />
    </div>
  );
}
