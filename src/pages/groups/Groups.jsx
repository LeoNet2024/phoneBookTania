import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import classes from "../page.module.css";
import { useState } from "react";
import ContactView from "../../components/ContactView/contactView";
import GroupBar from "../../components/GroupBar/GroupBar";

export default function Groups(props) {
  return (
    <div className={classes.page}>
      <Header />
      <main>
        <GroupBar />
      </main>
      <ContactView
        links={props.links}
        contacts={props.contacts}
        setContacts={props.setContacts}
      />
      <Footer />
    </div>
  );
}
