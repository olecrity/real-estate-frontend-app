import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./AppLayout.module.scss";

function AppLayout() {
  return (
    <div className={styles["layout"]}>
      <Header />
      <div className={styles["main"]}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
