import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import classes from "./page.module.css";

import PersonList from "../components/contactsList/PersonList";
import SearchBar from "../components/searchBar/searchBar";
import { useState } from "react";

import Group from "../components/group/group";
import EditForm from "../components/modal/formToEdit/editForm";
export default function Contacts(props) {
  // used to search bar.

  const [filteredContacts, setFilteredContacts] = useState(props.contacts);

  // this function remove the person. the props way is -> contacts -> personList -> person
  function removeContact(personId) {
    props.setContacts((prev) =>
      prev.filter((prev) => {
        return prev.id != personId;
      })
    );
    setFilteredContacts(props.contacts);
  }

  // this fucction edit contacts
  function editContact(contactId, contactDetails) {
    const selectedContact = props.contacts.find((el) => el.id === contactId);

    if (!selectedContact) console.log("Contact not found");
    else {
      props.setContacts((prev) =>
        prev.map((el) => {
          return el.id === contactId ? contactDetails : el;
        })
      );
    }
    setFilteredContacts(props.contacts);
  }

  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <h2>contacts</h2>
      <main>
        <SearchBar
          setContacts={setFilteredContacts}
          contacts={props.contacts}
        />
        <p>this is the contact page</p>
        <PersonList
          contacts={filteredContacts}
          func={removeContact}
          edit={editContact}
        />
      </main>
      <Footer />
    </div>
  );
}
