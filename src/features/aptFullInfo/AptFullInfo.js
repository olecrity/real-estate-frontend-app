import { useParams } from "react-router-dom";
import { useAptFullInfo } from "./useAptFullInfo";
import { Col, Row, Spin } from "antd";
import AptHeader from "./AptHeader/AptHeader";
import AptSider from "./AptSider/AptSider";
import AptMain from "./AptMain/AptMain";

function AptFullInfo() {
  const params = useParams();
  const { isLoading, appartmentInfo } = useAptFullInfo(params.appartmentId);
  console.log(isLoading, appartmentInfo);

  if (isLoading) {
    return <Spin spinning={true} percent={0} fullscreen />;
  }
  return (
    <div>
      <Row>
        <Col span={24}>
          <AptHeader />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <AptSider />
        </Col>
        <Col span={16}>
          <AptMain />
        </Col>
      </Row>
    </div>
  );
}

export default AptFullInfo;
