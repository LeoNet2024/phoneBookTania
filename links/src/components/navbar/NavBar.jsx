import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

export default function NavBar(props) {
  console.log(props.links);

  const listLinks = props.links.map((el) => {
    return (
      <li key={crypto.randomUUID()}>
        <NavLink
          to={el.url}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          {el.name}
        </NavLink>
      </li>
    );
  });

  console.log(listLinks);
  return (
    <nav className={classes.navbar}>
      <ul>{listLinks}</ul>
    </nav>
  );
}
