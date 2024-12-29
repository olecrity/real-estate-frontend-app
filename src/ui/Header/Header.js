import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const { isAuth, logout } = useAuth();
  return (
    <div className={`${styles.header} shadow-bottom`}>
      <ul>
        <li>
          <NavLink to="/appartments">Оголошення</NavLink>
        </li>
        <li>
          <NavLink to="/work">Робота</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">Про нас</NavLink>
        </li>
        <li>
          <NavLink to="/bookmarks">Закладки</NavLink>
        </li>
        {isAuth && (
          <li>
            <NavLink to="/appartment/create">Додати оголошення</NavLink>
          </li>
        )}
      </ul>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Header;
