import classes from "./contactList.module.css";
import Contact from "../contact/contact";

// this component return list of contacts that given from DB
export default function ContactList(props) {
  let copyContacts = props.contacts;

  // create a list of contacts with keys
  copyContacts = copyContacts.map((el) => {
    return (
      <Contact
        name={el.name}
        email={el.email}
        phone={el.phone}
        key={crypto.randomUUID()}
      />
    );
  });

  return <div className={classes.contactsList}>{copyContacts}</div>;
}
