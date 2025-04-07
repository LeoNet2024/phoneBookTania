import { NavLink } from 'react-router-dom';
import classes from './navbar.module.css';

export default function NavBar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          {/* use NavLink to navigate to the home page */}
          {/* it replaces a tag <a href="/">Home</a> */}
          {/* it allows to use active class what Link doesn't have */}
          {/* In React Router v6+, "/" is a special case: */}
          {/* - It automatically behaves as if it has 'end' prop */}
          {/* - It will only match exactly "/" by default */}
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* If we add nested routes like /about/team: */}
          {/* - Without 'end': link stays active for /about/team (usually what we want) */}
          {/* - With 'end': link only active for exact /about path */}
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            About
          </NavLink>

          <NavLink
            to='/group'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            group
          </NavLink>

          <NavLink
            to='/logout'
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            logout
          </NavLink>
          {/* If you want the link to be active only on the exact match, use end.
          Otherwise, React Router keeps it active for nested routes too. */}
          {/* <NavLink to='/about' end>
            About
          </NavLink> */}
        </li>
      </ul>
    </nav>
  );
}
