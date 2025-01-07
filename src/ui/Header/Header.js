import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../data/img/logo.jpg";

function Header() {
  const { isAuth, logout } = useAuth();

  const items = [
    {
      key: 1,
      label: <NavLink to="/appartments">Оголошення</NavLink>,
    },
    {
      key: 2,
      label: <NavLink to="/about-us">Про нас</NavLink>,
    },
    {
      key: 3,
      label: <NavLink to="/bookmarks">Закладки</NavLink>,
    },
    {
      key: 4,
      label: isAuth ? (
        <NavLink to="/appartment/create">Додати оголошення</NavLink>
      ) : (
        ""
      ),
    },
  ];
  return (
    <header className={`${styles.header} shadow-bottom`}>
      <div className={styles["logo"]}>
        <img src={logo} alt="Lion prime"></img>

        <span className={styles["logo-text"]}>
          <span className={styles["lion"]}>LION</span>
          <span className={styles["prime"]}>PRIME</span>
        </span>
      </div>
      <ul className={styles["desktop-menu"]}>
        <li>
          <NavLink to="/appartments">Оголошення</NavLink>
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Dropdown menu={{ items }} className={styles["mobile-menu"]}>
          <Button>
            <MenuOutlined />
          </Button>
        </Dropdown>
        {isAuth && (
          <Button variant="solid" color="primary" onClick={logout}>
            logout
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
