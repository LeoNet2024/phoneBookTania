import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { useState } from "react";

import classes from "../app/app.module.css";
import Groups from "./Groups";
import Contacts from "./Contacts";
import Login from "./Login";

// import user from React  ("DB")
import { contactsDataFromDB } from "../data/contactsData";

export default function PageRouter(props) {
  const [isLoggedIn, setLoggedIn] = useState(true);

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
              isLoggedIn ? <Home links={props.links} /> : <Navigate to={"/"} />
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
          {/* <Route path="/logout" element={<Logout />} /> */}

          {/* if nothing was found, show NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </section>
  );
}
