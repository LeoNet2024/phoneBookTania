import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import classes from "../page.module.css";

import PersonList from "../../components/contactsList/PersonList";
import SearchBar from "../../components/searchBar/searchBar";
import { useEffect, useState } from "react";

import AddForm from "../../components/modal/formToadd/addForm";
export default function Contacts(props) {
  const [filteredContacts, setFilteredContacts] = useState(props.contacts);

  //use state for add contact form
  const [showAddContact, setShowAddContact] = useState(false);

  // used to prevent double action
  // after the function has been executed the use effect will update the filter list
  useEffect(() => {
    setFilteredContacts(props.contacts);
  }, [props.contacts]);

  // this function remove the person. the props way is -> contacts -> personList -> person
  function removeContact(personId) {
    const res = props.contacts.filter((el) => el.id !== personId);
    props.setContacts(res);
  }

  // this fucction edit contacts
  function editContact(contactId, contactDetails) {
    const selectedContact = props.contacts.find((el) => el.id === contactId);

    if (!selectedContact) console.log("Contact not found");
    else {
      // if the user id dosnt match, the map function return the orginal obj.
      // but if the user id equal that mean we want to override the exists obj with the new
      const updatedContacts = props.contacts.map((el) =>
        el.id === contactId ? { ...el, ...contactDetails } : el
      );
      // update the prime contacts
      props.setContacts(updatedContacts);
    }
  }

  // this funciton adding new contact to contacts list from addContacts component
  function addNewContact(contactObj) {
    props.setContacts((prev) => [...prev, contactObj]);
  }

  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <h2>contacts</h2>
      <button
        onClick={() => setShowAddContact(true)}
        style={{ width: "30%", margin: "auto" }}
      >
        Add new Contact
      </button>
      <main>
        <SearchBar
          setContacts={setFilteredContacts}
          contacts={props.contacts}
        />
        <PersonList
          contacts={filteredContacts}
          func={removeContact}
          edit={editContact}
        />
      </main>
      {showAddContact && (
        <AddForm addfunc={addNewContact} setForm={setShowAddContact} />
      )}
      <Footer />
    </div>
  );
}
