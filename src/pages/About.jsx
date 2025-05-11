import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import classes from "./page.module.css";

export default function About() {
  return (
    <div className={classes.page}>
      <Header />
      <NavBar />
      <h2>About</h2>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapiente voluptate temporibus error commodi, porro blanditiis facilis autem! Officia ducimus modi beatae ipsum nulla tempore laborum quis debitis quisquam fuga?
        </p>
      </main>
      <Footer />
    </div>
  );
}
