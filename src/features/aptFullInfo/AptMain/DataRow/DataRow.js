import { Col, Row } from "antd";

import styles from "./DataRow.module.scss";

function DataRow({ propName, propValue }) {
  return (
    <Row className={styles["data-row"]}>
      <Col span={11}>{propName}</Col>
      <Col span={11} offset={2}>
        {propValue}
      </Col>
    </Row>
  );
}

export default DataRow;
