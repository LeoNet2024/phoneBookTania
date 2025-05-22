import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useState } from "react";
import classes from "../app/app.module.css";

import Login from "./login/Login";
import Home from "./home/Home";
import Contacts from "./contacts/Contacts";
import Groups from "./groups/Groups";
import Logout from "./logout/Logout";
import NotFound from "./NotFound";

// import user from React  ("DB")
import { contactsDataFromDB } from "../data/contactsData";

export default function PageRouter(props) {
  // used to protected navigate
  const [isLoggedIn, setLoggedIn] = useState(true);

  // contacts list
  const [contacts, setContacts] = useState(contactsDataFromDB);

  return (
    <section className={classes.app}>
      <Router>
        <Routes>
          {/* routes go here, as children. the order is not important except the last one */}
          {/* path is exact path to the component (router version 7 and up)*/}
          {/* you can add props to component as usual */}

          {/* Two separate routes for Home component */}
          <Route path="/" element={<Login onLogIn={setLoggedIn} />} />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <Home contacts={contacts} links={props.links} />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/contacts"
            element={
              isLoggedIn ? (
                <Contacts
                  links={props.links}
                  contacts={contacts}
                  setContacts={setContacts}
                />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />

          {/* <Route path="/about" element={<About links={props.links} />} /> */}
          <Route
            path="/groups"
            element={
              isLoggedIn ? (
                <Groups links={props.links} contacts={contacts} />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          {
            <Route
              path="/logout"
              element={
                isLoggedIn ? (
                  <Logout func={setLoggedIn} />
                ) : (
                  <Navigate to={"/"} />
                )
              }
            />
          }

          {/* if nothing was found, show NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </section>
  );
}
