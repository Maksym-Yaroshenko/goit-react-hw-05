import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <nav>
        <ul className={css.container}>
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={getNavLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
