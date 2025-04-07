import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import NavBar from '../components/navbar/NavBar';
import classes from './page.module.css';

export default function Group() {
  return (
    <div className={classes.page}>
      <Header />
      <NavBar />
      <h2>Groups</h2>
      <main>
        <p>this is the group page</p>
      </main>
      <Footer />
    </div>
  );
}
