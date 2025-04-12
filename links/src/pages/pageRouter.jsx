import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

import classes from "../app/app.module.css";
import Groups from "./Groups";
import Logout from "./Logout";
import Contacts from "./Contacts";
import Login from "./Login";

export default function PageRouter(props) {
  return (
    <section className={classes.app}>
      <Router>
        <Routes>
          {/* routes go here, as children. the order is not important except the last one */}
          {/* path is exact path to the component (router version 7 and up)*/}
          {/* you can add props to component as usual */}

          {/* Two separate routes for Home component */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home links={props.links} />} />
          <Route path="/contacts" element={<Contacts links={props.links} />} />

          {/* <Route path="/about" element={<About links={props.links} />} /> */}
          <Route path="/groups" element={<Groups links={props.links} />} />
          {/* <Route path="/logout" element={<Logout />} /> */}

          <Route path="/login" element={<Login />} />

          {/* if nothing was found, show NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </section>
  );
}
