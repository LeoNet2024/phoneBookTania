import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import classes from "./page.module.css";

import { useState, useEffect } from "react";
import { contactsDataFromDB } from "../data/contactsData";

export default function Home(props) {
  const [summary, setSummary] = useState({ family: 0, work: 0, school: 0 });
  const [recentContacts, setRecentContacts] = useState([]);

  useEffect(() => {
    const groupSummary = { family: 0, work: 0, school: 0 };

    contactsDataFromDB.forEach((c) => {
      if (groupSummary[c.group] !== undefined) {
        groupSummary[c.group]++;
      }
    });

    setSummary(groupSummary);
    setRecentContacts(contactsDataFromDB.slice(-3)); // שלושת האחרונים
  }, []);

  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <h2>Home</h2>
      <p>Welcome back !</p>
      <main>
        <section>
          <h3>Contact Summary</h3>
          <ul>
            <li>Family: {summary.family}</li>
            <li>Work: {summary.work}</li>
            <li>School: {summary.school}</li>
          </ul>
        </section>

        <section>
          <h3>Recently Added Contacts</h3>
          {recentContacts.map((c, i) => (
            <p key={i}>
              {c.name} - {c.group}
            </p>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
