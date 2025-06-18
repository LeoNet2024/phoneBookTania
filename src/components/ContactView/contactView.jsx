import React from "react";
import NavBar from "../navbar/NavBar";
import SearchBar from "../searchBar/searchBar";
import SortBar from "../sortBar/sortBar";
import PersonList from "../contactsList/PersonList";
import AddForm from "../modal/formToadd/addForm";
import sortContacts from "../../functions/sortContacts";

import { useState } from "react";

export default function ContactView({ links, contacts, setContacts }) {
  

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  //use state for add contact form
  const [showAddContact, setShowAddContact] = useState(false);

  // this function remove the person. the props way is -> contacts -> personList -> person
  function removeContact(personId) {
    const res = contacts.filter((el) => el.id !== personId);
    setFilteredContacts(res);
    setContacts(res);
  }

  // this fucction edit contacts
  function editContact(contactId, contactDetails) {
    const selectedContact = contacts.find((el) => el.id === contactId);

    if (!selectedContact) console.log("Contact not found");
    else {
      // if the user id doesnt match, the map function return the orginal obj.
      // but if the user id equal that mean we want to override the exists obj with the new
      const updatedContacts = contacts.map((el) =>
        el.id === contactId ? { ...el, ...contactDetails } : el
      );

      // update the prime contacts
      setContacts(updatedContacts);
      setFilteredContacts(updatedContacts);
    }
  }

  // this funciton adding new contact to contacts list from addContacts component
  function addNewContact(contactObj) {
    // new list with new contact
    const updated = [...contacts, contactObj];
    // update two list
    setContacts(updated);
    // update two list
    setFilteredContacts(updated);
  }

  // this function handle with sort contacts by user select
  function handleSort(sortSelect) {
    // calling helper function from /functions/sortContacts
    // the function return sorted list
    const res = sortContacts(contacts, sortSelect);

    setFilteredContacts(res);
  }
  return (
    <div>
      <main>
        <NavBar links={links} />
        <h2>contacts</h2>
        <button
          onClick={() => setShowAddContact(true)}
          style={{ width: "30%", margin: "auto" }}
        >
          Add new Contact
        </button>

        <main>
          <SearchBar setContacts={setFilteredContacts} contacts={contacts} />
          <SortBar handleSort={handleSort} />

          <PersonList
            contacts={filteredContacts}
            func={removeContact}
            edit={editContact}
          />
        </main>

        {showAddContact && (
          <AddForm addfunc={addNewContact} setForm={setShowAddContact} />
        )}
      </main>
    </div>
  );
}
