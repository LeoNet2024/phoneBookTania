import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import classes from "./page.module.css";

import PersonList from "../components/contactsList/PersonList";
import SearchBar from "../components/searchBar/searchBar";
import { useState } from "react";

import Group from "../components/group/group";
export default function Contacts(props) {
  // used to search bar.
  const [dynamicContact, setDynaminContact] = useState(props.contacts);

  // this function remove the person. the props way is -> contacts -> personList -> person
  function removeContact(personId) {
    setDynaminContact((prev) =>
      prev.filter((prev) => {
        return prev.id != personId;
      })
    );
  }

  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <h2>contacts</h2>
      <main>
        <SearchBar setContacts={setDynaminContact} contacts={props.contacts} />
        <p>this is the contact page</p>
        <PersonList contacts={dynamicContact} func={removeContact} />
      </main>
      <Group name="Work" percentage={dynamicContact.length} />
      <Footer />
    </div>
  );
}
