import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const { logout } = useAuth();

  return (
    <div className={styles.header}>
      <ul>
        <li>
          <NavLink to="appartments">Appartments</NavLink>
        </li>
        <li>
          <NavLink to="work">Work</NavLink>
        </li>
        <li>
          <NavLink to="about-us">About us</NavLink>
        </li>
      </ul>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Header;
