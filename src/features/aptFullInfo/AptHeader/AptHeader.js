import { useNavigate, useParams } from "react-router-dom";
import { useAptFullInfo } from "../useAptFullInfo";

import styles from "./AptHeader.module.scss";
import { Button } from "antd";

function AptHeader() {
  const params = useParams();
  const { appartmentInfo } = useAptFullInfo(params.appartmentId);
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <div className={styles["apt-header"]}>
      <h2 className={styles["header-text"]}>
        {appartmentInfo.location}, Код: {appartmentInfo.code}
      </h2>
      <Button onClick={handleBack} variant="solid" color="danger" size="large">
        Повернутись до списку
      </Button>
    </div>
  );
}

export default AptHeader;
