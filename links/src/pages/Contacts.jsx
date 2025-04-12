import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import classes from "./page.module.css";

export default function Contacts(props) {
  return (
    <div className={classes.page}>
      <Header />
      <NavBar links={props.links} />
      <h2>contacts</h2>
      <main>
        <p>this is the group page</p>
      </main>
      <Footer />
    </div>
  );
}
