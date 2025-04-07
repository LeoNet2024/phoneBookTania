import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

import classes from '../app/app.module.css';
import Groups from './Group';
import Logout from './Logout';

export default function PageRouter() {
  return (
    <section className={classes.app}>
      <Router>
        <Routes>
          {/* routes go here, as children. the order is not important except the last one */}
          {/* path is exact path to the component (router version 7 and up)*/}
          {/* you can add props to component as usual */}

          {/* Two separate routes for Home component */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/group' element={<Groups />} />
          <Route path='/logout' element={<Logout />} />

          {/* if nothing was found, show NotFound */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </section>
  );
}
