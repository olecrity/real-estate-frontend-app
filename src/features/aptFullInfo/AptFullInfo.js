import { useParams } from "react-router-dom";
import { useAptFullInfo } from "./useAptFullInfo";
import { Col, Row, Spin } from "antd";
import AptHeader from "./AptHeader/AptHeader";
import AptSider from "./AptSider/AptSider";
import AptMain from "./AptMain/AptMain";

function AptFullInfo() {
  const params = useParams();
  const { isLoading, appartmentInfo } = useAptFullInfo(params.appartmentId);

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
        <Col xl={{ span: 8 }} span={24}>
          <AptSider />
        </Col>
        <Col xl={{ span: 15, offset: 1 }} span={24}>
          <AptMain />
        </Col>
      </Row>
    </div>
  );
}

export default AptFullInfo;
