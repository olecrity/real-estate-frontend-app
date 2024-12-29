import { useParams } from "react-router-dom";
import { useAptFullInfo } from "../useAptFullInfo";
import { PhoneOutlined } from "@ant-design/icons";

import styles from "./AptSider.module.scss";
import { Col, Flex, Image, Row } from "antd";

function AptSider() {
  const params = useParams();
  const { appartmentInfo } = useAptFullInfo(params.appartmentId);
  return (
    <div className={styles["apt-sider"]}>
      <Image.PreviewGroup>
        <Row gutter={[5, 5]} key={1}>
          {appartmentInfo.photos.map((photo, index) =>
            index === 0 ? (
              <Col
                className={styles["main-image"]}
                xl={{ span: 24, offset: 0 }}
                span={22}
                offset={1}
                key={index}
                style={{ height: "fit-content" }}
              >
                <Image
                  width={"100%"}
                  height={"100%"}
                  src={`data:image/png;base64,   ${photo.image_base64}`}
                />
              </Col>
            ) : (
              <Col
                xl={{ span: 6, offset: 0 }}
                span={22}
                offset={1}
                key={index}
                className={styles["secondary-image"]}
              >
                <Image
                  width={"100%"}
                  height={"100%"}
                  src={`data:image/png;base64,   ${photo.image_base64}`}
                />
              </Col>
            )
          )}
        </Row>
      </Image.PreviewGroup>
      <div className={styles["contacts"]}>
        <span
          style={{
            display: "flex",
          }}
        >
          <span className={styles["phone-icon"]}>
            <PhoneOutlined />
          </span>
        </span>
        <div className={styles["phone-text-info"]}>
          <span
            style={{
              fontWeight: "300",
            }}
          >
            Зателефонуйте нам:
          </span>
          <span
            style={{
              fontWeight: "600",
            }}
          >
            +38 050 123 45 67
          </span>
          <span
            style={{
              fontWeight: "600",
            }}
          >
            +38 050 123 45 67
          </span>
        </div>
      </div>
    </div>
  );
}

export default AptSider;
