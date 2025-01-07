import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./AppLayout.module.scss";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <div className={styles["layout"]}>
      <Header />
      <main className={styles["main"]}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
