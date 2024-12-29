import { Button } from "antd";
import styles from "./AppartmentsHeader.module.scss";
import { useNavigate } from "react-router-dom";
function AppartmentsHeader() {
  const navigate = useNavigate();
  return (
    <div className={styles["appartment-header"]}>
      <span>
        <p>Оголошення</p>
      </span>
      <span>
        <Button onClick={() => navigate("/bookmarks")} type="default">
          Закладки
        </Button>
      </span>
    </div>
  );
}

export default AppartmentsHeader;
