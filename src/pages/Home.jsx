// import pages
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import classes from "./page.module.css";

// import components
import ContactList from "../components/contactsList/PersonList";
import AddForm from "../components/modal/formToadd/addForm";

// import all data from DB that have link to home page
import { contactsDataFromDB } from "../data/contactsData";

export default function Home(props) {
  const user = localStorage.getItem("loggedInUser");

  return (
    <div className={classes.page}>
      <Header />
      <p>welcome {user}</p>
      <NavBar links={props.links} />
      <h2>Home</h2>
      <main>
        <p></p>
      </main>

      <Footer />
    </div>
  );
}
