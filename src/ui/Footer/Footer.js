import styles from "./Footer.module.scss";

import { PhoneOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <p>Lion Prime, 2024</p>
      <p>Location of the office</p>
      <div className={styles["contacts-container"]}>
        <div className={styles["contact-header-container"]}>
          <span className={styles["icon-container"]}>
            <PhoneOutlined />
          </span>
          <span>Contacts : </span>
        </div>
        <div>
          <div>+38 050 1234567</div>
          <div>+38 099 1234567</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
