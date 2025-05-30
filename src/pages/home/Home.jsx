import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import classes from "../page.module.css";

import Actions from "../../components/compForHome/actions";
import RecentContact from "../../components/compForHome/recentContact";
import { useEffect, useState } from "react";

export default function Home(props) {
  // "cutting" the last three contacts

  console.log(props);
  const recentContacts = props.contacts.slice(-3);

  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <main>
        <h3>
          Welcome to Your Personal Contact Manager! This application helps you
          efficiently manage your contacts by grouping them into categories like
          Family, Work, and School.
        </h3>
        <Actions />
        <section>
          <div>
            <h2>recent contacts that added </h2>
            <RecentContact recent={recentContacts} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
